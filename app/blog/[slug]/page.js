import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCover from "@/components/ui/ArticleCover";
import BlogCard from "@/components/ui/BlogCard";
import { fetchBlogPosts } from "@/data/blogs";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await fetchBlogPosts();
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [{ url: "/opengraph-image", alt: "TechNova Solutions" }],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const posts = await fetchBlogPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const relatedPosts = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main>
      <article className="bg-surface pt-12 pb-20 sm:pt-16 sm:pb-24">
        <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand-500 focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to insights
          </Link>

          <header className="mt-12 max-w-5xl">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-500 uppercase">
              <span className="h-px w-7 bg-current" aria-hidden="true" />
              {post.category}
            </p>
            <h1 className="mt-5 max-w-[18ch] text-4xl leading-[1.04] font-semibold tracking-[-0.045em] text-ink-950 sm:text-5xl lg:text-[4rem]">
              {post.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
              {post.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-brand-500" aria-hidden="true" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} className="text-brand-500" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="relative mt-12 aspect-[16/8.5] max-w-6xl overflow-hidden border border-line bg-paper">
            <ArticleCover post={post} />
          </div>

          <div className="mt-12 grid max-w-5xl gap-8 lg:grid-cols-[12rem_1fr] lg:gap-12">
            <p className="text-xs font-semibold tracking-[0.12em] text-brand-500 uppercase">
              TechNova Insights<br />
              JSONPlaceholder feed
            </p>
            <div>
              <div className="space-y-6 text-lg leading-8 text-ink-800">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 grid gap-6 border-y border-line py-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
                    Have a similar challenge?
                  </p>
                  <h2 className="mt-2 text-2xl font-medium text-ink-950">
                    Let&apos;s find the right next step.
                  </h2>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-sm bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-brand-500"
                >
                  Talk to our team <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-paper py-20 sm:py-24" aria-labelledby="related-title">
        <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-500 uppercase">
                <span className="h-px w-7 bg-current" aria-hidden="true" />
                Keep exploring
              </p>
              <h2 id="related-title" className="mt-4 text-3xl font-semibold text-ink-950">
                More from TechNova
              </h2>
            </div>
            <Link
              href="/#blog"
              className="hidden text-sm font-semibold text-brand-500 hover:text-brand-600 sm:inline"
            >
              View all insights
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
