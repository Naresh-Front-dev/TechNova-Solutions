"use client";

import { useQuery } from "@tanstack/react-query";
import { AlertCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import BlogCard from "@/components/ui/BlogCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { fetchBlogPosts } from "@/data/blogs";

export default function Blog() {
  const {
    data: posts = [],
    error,
    isError,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });

  return (
    <section id="blog" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Ideas & insights"
            title="Thinking for what comes next"
            description="Practical perspectives on building better products, choosing technology, and creating digital experiences people value."
          />
          <p className="max-w-sm text-sm leading-6 text-muted lg:text-right">
            The latest six articles, loaded live from our publishing feed.
          </p>
        </div>

        {isPending && <BlogSkeleton />}

        {isError && (
          <div
            className="mt-12 border border-red-200 bg-surface p-8 text-center"
            role="alert"
          >
            <AlertCircle className="mx-auto text-red-500" size={30} aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold text-ink-950">The articles could not be loaded</h3>
            <p className="mx-auto mt-2 max-w-md text-muted">
              {error.message}
            </p>
            <motion.button
              type="button"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-brand-500"
              onClick={() => refetch()}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw size={16} aria-hidden="true" />
              Try Again
            </motion.button>
          </div>
        )}

        {!isPending && !isError && (
          <div
            className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
            aria-busy={isFetching}
          >
            {posts[0] && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlogCard post={posts[0]} variant="featured" />
              </motion.div>
            )}

            <div className="border-t border-line lg:border-t-0 lg:border-l lg:pl-12">
              {posts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <BlogCard
                    post={post}
                    variant="compact"
                    number={String(index + 2).padStart(2, "0")}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function BlogSkeleton() {
  return (
    <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr]" role="status">
      <span className="sr-only">Loading blog posts</span>
      <div className="border-t border-line pt-6" aria-hidden="true">
        <div className="aspect-[16/9] animate-pulse bg-[#e8e8e1]" />
        <div className="mt-6 h-3 w-1/4 animate-pulse bg-[#e8e8e1]" />
        <div className="mt-4 h-8 w-4/5 animate-pulse bg-[#e8e8e1]" />
      </div>
      <div className="border-t border-line lg:border-l lg:pl-10" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="border-b border-line py-6">
            <div className="h-3 w-1/4 animate-pulse bg-[#e8e8e1]" />
            <div className="mt-3 h-5 w-4/5 animate-pulse bg-[#e8e8e1]" />
          </div>
        ))}
      </div>
    </div>
  );
}
