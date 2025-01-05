"use client";

import { motion } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const slideIn = (direction: "up" | "down" | "left" | "right", delay: number = 0) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const FadeIn = motion.div;
export const SlideIn = motion.div;
export const StaggerContainer = motion.div; 