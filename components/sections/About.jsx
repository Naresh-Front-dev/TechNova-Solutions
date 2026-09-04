import { Handshake, Layers3, Lightbulb } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  {
    title: "Innovation",
    description:
      "We explore modern technology and practical ideas to solve real business challenges.",
    icon: Lightbulb,
  },
  {
    title: "Scalability",
    description:
      "We design foundations that can grow with your users, product, and organization.",
    icon: Layers3,
  },
  {
    title: "Partnership",
    description:
      "We work openly with your team, from early strategy through dependable delivery.",
    icon: Handshake,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <SectionTitle
          eyebrow="Who we are"
          title="Technology that moves business forward"
          description="TechNova Solutions helps businesses transform promising ideas into high-quality digital products that are ready for real-world growth."
        />

        <div className="border-t border-line">
          <Reveal>
            <div className="grid gap-3 border-b border-line py-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
                Our mission
              </p>
              <p className="text-lg leading-8 text-ink-800">
                Simplify complex technology and create reliable solutions that help
                organizations grow and serve people better.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-3 border-b border-line py-7 sm:grid-cols-[8rem_1fr] sm:gap-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
                Our vision
              </p>
              <p className="text-lg leading-8 text-ink-800">
                Be the trusted technology partner behind the next generation of useful
                digital experiences.
              </p>
            </div>
          </Reveal>

          {values.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="grid gap-4 border-b border-line py-7 sm:grid-cols-[8rem_0.65fr_1fr] sm:items-start sm:gap-8">
                <div className="flex items-center gap-3 text-brand-500">
                  <span className="font-heading text-xs">0{index + 1}</span>
                  <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-ink-950">{title}</h3>
                <p className="leading-7 text-muted">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
