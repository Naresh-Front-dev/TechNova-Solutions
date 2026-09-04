import Reveal from "@/components/ui/Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase ${
          light ? "text-brand-200" : "text-brand-500"
        }`}
      >
        <span className="h-px w-7 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`text-3xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[2.6rem] ${
          light ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            light ? "text-[#bcbcb5]" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
