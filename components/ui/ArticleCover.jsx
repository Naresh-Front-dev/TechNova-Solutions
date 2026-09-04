export default function ArticleCover({ post }) {
  const articleNumber = String(post.id).padStart(2, "0");

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#ecece5] p-6 sm:p-8"
      aria-hidden="true"
    >
      <div className="relative z-10 flex items-center justify-between text-[0.65rem] font-semibold tracking-[0.14em] text-ink-800 uppercase">
        <span>TechNova Journal</span>
        <span>{post.date}</span>
      </div>

      <span className="font-heading absolute -right-2 -bottom-12 text-[clamp(8rem,24vw,18rem)] leading-none font-medium tracking-[-0.08em] text-[#d5dfda] transition-transform duration-500 group-hover:-translate-x-2">
        {articleNumber}
      </span>

      <div className="relative z-10 max-w-xs border-l-2 border-brand-500 pl-4">
        <p className="text-xs font-semibold tracking-[0.12em] text-brand-500 uppercase">
          Field note {articleNumber}
        </p>
        <p className="font-heading mt-2 text-2xl leading-tight font-medium text-ink-950 sm:text-3xl">
          {post.category}
        </p>
      </div>
    </div>
  );
}
