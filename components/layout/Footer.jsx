import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 py-14 sm:py-18">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-brand-400"
            >
              <span className="font-heading grid size-9 place-items-center rounded-sm border border-white/70 text-xs font-semibold text-white">
                TN
              </span>
              <span className="font-heading text-lg font-semibold tracking-[-0.025em]">
                TechNova Solutions
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-[#aaa9a2]">
              Building thoughtful digital experiences that help growing businesses
              move forward with confidence.
            </p>
            <a
              href="mailto:hello@technovasolutions.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition-colors hover:text-white"
            >
              <Mail size={17} aria-hidden="true" />
              hello@technovasolutions.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#aaa9a2] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Connect</h2>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#aaa9a2] transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-sm text-[#85857f] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.</p>
          <p>Technology with purpose, built for progress.</p>
        </div>
      </div>
    </footer>
  );
}
