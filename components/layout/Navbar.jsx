"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const logoLetters = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.2, staggerChildren: 0.035 },
  },
};

const logoLetter = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <nav
        className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/#home"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-brand-500"
          onClick={() => setIsOpen(false)}
        >
          <motion.span
            className="font-heading grid size-9 place-items-center rounded-sm border border-ink-950 text-xs font-semibold text-ink-950"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            aria-hidden="true"
          >
            TN
          </motion.span>
          <motion.span
            className="font-heading text-[1.05rem] font-semibold tracking-[-0.025em] text-ink-950"
            variants={logoLetters}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            {"TechNova".split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                className="inline-block"
                variants={logoLetter}
              >
                {letter}
              </motion.span>
            ))}{" "}
            <span className="text-brand-500">
              {"Solutions".split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="inline-block"
                  variants={logoLetter}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.span>
          <span className="sr-only">TechNova Solutions</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-medium text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-300 after:content-[''] hover:text-ink-950 hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden min-h-10 items-center justify-center rounded-sm bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-brand-500 lg:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-sm border border-line text-ink-950 transition-colors hover:border-ink-950 focus-visible:outline-2 focus-visible:outline-brand-500 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="mx-auto flex w-full max-w-[84rem] flex-col px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white hover:text-ink-950 focus-visible:outline-2 focus-visible:outline-brand-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-sm bg-brand-500 px-5 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
