"use client";

import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const variants = {
  primary:
    "border border-brand-500 bg-brand-500 text-white hover:border-brand-600 hover:bg-brand-600",
  secondary:
    "border border-line bg-transparent text-ink-950 hover:border-ink-950",
  light:
    "border border-white bg-white text-ink-950 hover:bg-surface",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 380, damping: 28 },
  };

  if (href.startsWith("#")) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps}>
      {children}
    </MotionLink>
  );
}
