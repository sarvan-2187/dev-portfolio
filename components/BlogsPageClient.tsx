"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";
import BlogModal from "@/components/BlogModal";
import { StaggerTitle } from "@/components/StaggerTitle";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type BlogsPageClientProps = {
  blogs: BlogPost[];
};

const BlogsPageClient = ({ blogs }: BlogsPageClientProps) => {
  const [activePost, setActivePost] = React.useState<BlogPost | null>(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="px-4 font-sans lg:px-58"
      suppressHydrationWarning={true}
    >
      <main className="my-4 p-2">
        <StaggerTitle
          text="My Blogs"
          className="mb-12 text-center text-3xl font-serif font-bold md:text-4xl"
        />
        
        {blogs.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
            No blogs found yet. Add a markdown file inside public/blogs (example: blogone.md), and it will appear here automatically.
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
            {blogs.map((post, index) => (
              <motion.button
                key={post.slug}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setActivePost(post)}
                className="rounded-lg border border-slate-200 bg-[#ffffff] p-5 text-left outline outline-1 dark:border-[#1f1f1f] dark:bg-black dark:outline"
              >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-white/70">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                  <h2 className="mt-2 text-2xl leading-tight text-black dark:text-white">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm text-gray-700 dark:text-white/70">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-[#1f1f1f] dark:bg-black dark:text-white/70">
                    Read Now
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
              </motion.button>
            ))}
          </section>
        )}

        {activePost ? <BlogModal post={activePost} onClose={() => setActivePost(null)} /> : null}
      </main>
    </motion.div>
  );
};

export default BlogsPageClient;
