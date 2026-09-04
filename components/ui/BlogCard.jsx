import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ArticleCover from "@/components/ui/ArticleCover";

export default function BlogCard({ post, variant = "standard", number }) {
  if (variant === "compact") {
    return (
      <article className="group grid grid-cols-[2.25rem_1fr_auto] gap-4 border-b border-line py-5 sm:py-6">
        <span className="font-heading pt-1 text-xs text-[#92928c]">{number}</span>
        <div>
          <p className="text-xs font-semibold tracking-[0.08em] text-brand-500 uppercase">
            {post.category}
          </p>
          <h3 className="mt-2 text-lg leading-6 font-medium tracking-[-0.02em] text-ink-950">
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors hover:text-brand-500 focus-visible:outline-2 focus-visible:outline-brand-500"
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-muted">
            {post.date} <span aria-hidden="true">/</span> {post.readTime}
          </p>
        </div>
        <ArrowUpRight
          size={17}
          className="mt-1 text-[#aaa9a2] transition-colors group-hover:text-brand-500"
          aria-hidden="true"
        />
      </article>
    );
  }

  const featured = variant === "featured";

  return (
    <article className="group border-t border-line pt-6">
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden border border-line bg-surface focus-visible:outline-2 focus-visible:outline-brand-500 ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
        aria-label={`Read ${post.title}`}
      >
        <ArticleCover post={post} />
      </Link>

      <div className="mt-6">
        <p className="text-xs font-semibold tracking-[0.08em] text-brand-500 uppercase">
          {post.category} <span aria-hidden="true">/</span> {post.readTime}
        </p>
        <h3
          className={`mt-3 font-medium tracking-[-0.03em] text-ink-950 ${
            featured ? "max-w-2xl text-2xl leading-8 sm:text-3xl sm:leading-9" : "text-xl leading-7"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-brand-500 focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            {post.title}
          </Link>
        </h3>
        <p className={`mt-3 leading-7 text-muted ${featured ? "max-w-2xl" : ""}`}>
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 transition-colors hover:text-brand-500 focus-visible:outline-2 focus-visible:outline-brand-500"
        >
          Read article
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
