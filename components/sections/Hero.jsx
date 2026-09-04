"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ButtonLink from "@/components/ui/ButtonLink";

const strengths = [
  { number: "01", label: "Product-minded teams" },
  { number: "02", label: "Scalable delivery" },
  { number: "03", label: "Clear collaboration" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-surface pt-16 pb-18 sm:pt-20 sm:pb-22 lg:pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <motion.p
          className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-500 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
          Technology partner / Karaikal, India
        </motion.p>

        <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(21rem,0.5fr)] lg:items-end lg:gap-16">
          <motion.h1
            className="max-w-[13ch] text-[clamp(3rem,7vw,5.4rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-ink-950"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Technology that solves real business problems.
          </motion.h1>

          <motion.div
            className="max-w-md lg:pb-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <p className="text-lg leading-8 text-muted">
              We help ambitious organizations turn ideas into scalable digital
              products, modern experiences, and practical technology solutions.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto] lg:grid-cols-1 xl:grid-cols-[1fr_auto]">
              <ButtonLink href="#contact" className="w-full px-5">
                Start a project <ArrowRight size={17} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#services" variant="secondary" className="w-full px-5">
                View our work
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.ul
          className="mt-16 grid border-y border-line sm:grid-cols-3 lg:mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.45, staggerChildren: 0.08 } },
          }}
        >
          {strengths.map((item, index) => (
            <motion.li
              key={item.number}
              className={`flex items-center gap-5 py-5 sm:px-6 ${
                index > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="font-heading text-xs text-brand-500">{item.number}</span>
              <span className="text-sm font-medium text-ink-900">{item.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
