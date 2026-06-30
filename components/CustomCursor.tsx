"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.1 };
  const springConfigSlow = { stiffness: 100, damping: 25, mass: 0.5 };

  const x = useSpring(useTransform(mouseX, v => v - 8), springConfig);
  const y = useSpring(useTransform(mouseY, v => v - 8), springConfig);
  const x2 = useSpring(useTransform(mouseX, v => v - 20), springConfigSlow);
  const y2 = useSpring(useTransform(mouseY, v => v - 20), springConfigSlow);

  const isHovered = useRef(false);
  const scale1 = useMotionValue(1);
  const scale2 = useMotionValue(1);
  const opacity2 = useMotionValue(1);
  const scale1Spring = useSpring(scale1, springConfig);
  const scale2Spring = useSpring(scale2, springConfigSlow);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hover =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        !!target.closest("a") ||
        !!target.closest("button");

      if (hover !== isHovered.current) {
        isHovered.current = hover;
        scale1.set(hover ? 2 : 1);
        scale2.set(hover ? 1.5 : 1);
        opacity2.set(hover ? 0 : 1);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, scale1, scale2, opacity2]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ x, y, scale: scale1Spring }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-gray-400 dark:border-gray-500 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ x: x2, y: y2, scale: scale2Spring, opacity: opacity2 }}
      />
    </>
  );
}
