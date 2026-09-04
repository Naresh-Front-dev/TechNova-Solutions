"use client";

import { motion } from "motion/react";

const startPositions = {
  up: { y: 18 },
  left: { x: -22 },
  right: { x: 22 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...startPositions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
