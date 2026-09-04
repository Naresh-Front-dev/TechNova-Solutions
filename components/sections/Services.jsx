import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <SectionTitle
          eyebrow="What we do"
          title="Expertise for every stage of your digital journey"
          description="From first idea to long-term growth, our teams combine strategy, design, and engineering to deliver technology that earns its place in your business."
        />

        <div className="mt-12 border-b border-line lg:mt-16">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={(index % 3) * 0.04}
            >
              <ServiceCard
                service={service}
                number={String(index + 1).padStart(2, "0")}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
