import {
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
} from "lucide-react";

const icons = {
  BrainCircuit,
  CloudCog,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
};

export default function ServiceCard({ service, number }) {
  const Icon = icons[service.icon];

  return (
    <article className="group grid gap-5 border-t border-line py-7 transition-colors hover:bg-white sm:px-3 md:grid-cols-[4rem_minmax(12rem,0.7fr)_1fr_2rem] md:items-start md:gap-8 lg:py-8">
      <span className="font-heading text-xs text-brand-500">{number}</span>
      <div className="flex items-center gap-4">
        <Icon size={20} strokeWidth={1.7} className="text-brand-500" aria-hidden="true" />
        <h3 className="text-xl font-medium tracking-[-0.02em] text-ink-950">
          {service.title}
        </h3>
      </div>
      <p className="max-w-xl leading-7 text-muted">{service.description}</p>
      <ArrowUpRight
        size={18}
        className="hidden text-[#a2a29b] transition-colors group-hover:text-brand-500 md:block"
        aria-hidden="true"
      />
    </article>
  );
}
