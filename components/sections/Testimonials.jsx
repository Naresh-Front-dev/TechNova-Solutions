import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CountUp from "@/components/ui/CountUp";
import { testimonials } from "@/data/testimonials";

const stats = [
  { number: 40, suffix: "+", label: "Products delivered" },
  { number: 12, label: "Industry partners" },
  { number: 96, suffix: "%", label: "Client satisfaction" },
  { number: 8, suffix: " yrs", label: "Team experience" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-ink-950 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <SectionTitle
          eyebrow="Client stories"
          title="Trusted by teams building what matters"
          description="We measure successful partnerships by the clarity of the process and the lasting value of the result."
          light
        />

        <div className="mt-12 grid border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-white/15 lg:mt-14">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              direction="up"
              delay={index * 0.08}
              className={`h-full ${index > 0 ? "border-t border-white/15 md:border-t-0" : ""}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ number, suffix, label }, index) => (
            <Reveal key={label} delay={index * 0.06}>
              <div>
                <p className="font-heading text-2xl font-medium text-white sm:text-3xl">
                  <CountUp number={number} suffix={suffix} />
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-[#999993] uppercase">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
