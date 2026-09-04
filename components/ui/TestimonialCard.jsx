import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full flex-col py-8 md:px-8">
      <Quote size={21} className="text-brand-400" strokeWidth={1.5} aria-hidden="true" />
      <blockquote className="mt-6 flex-1 text-lg leading-8 text-[#deded8]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-8 border-t border-white/15 pt-5">
        <p className="font-medium text-white">{testimonial.name}</p>
        <p className="mt-1 text-sm text-[#999993]">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </article>
  );
}
