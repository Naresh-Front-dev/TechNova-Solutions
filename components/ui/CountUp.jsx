"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ number, suffix = "" }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const counter = animate(0, number, {
      duration: 1.2,
      onUpdate: (value) => setCount(Math.round(value)),
    });

    return () => counter.stop();
  }, [isInView, number, reduceMotion]);

  return (
    <>
      <span ref={counterRef} aria-hidden="true">
        {reduceMotion ? number : count}{suffix}
      </span>
      <span className="sr-only">{number}{suffix}</span>
    </>
  );
}
