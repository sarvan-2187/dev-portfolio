"use client";

import React from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/lib/blogs";
import { X } from "lucide-react";

type BlogModalProps = {
  post: BlogPost;
  onClose: () => void;
};

const BlogModal = ({ post, onClose }: BlogModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    document.body.dataset.modalOpen = "true";
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.dataset.modalOpen = "false";
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
      data-lenis-prevent=""
    >
      <div className="flex min-h-dvh items-start justify-center overflow-y-auto px-4 md:items-center md:p-8">
        <div
          className="modal-scrollbar relative w-full max-w-4xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-lg border border-slate-200 bg-[#ffffff] p-5 font-sans shadow-lg dark:border-[#1f1f1f] dark:bg-black dark:outline md:max-h-[calc(100dvh-4rem)] md:p-8"
          onClick={(event) => event.stopPropagation()}
          onWheelCapture={(event) => event.stopPropagation()}
          onTouchMoveCapture={(event) => event.stopPropagation()}
          data-lenis-prevent=""
        >
          <div className="sticky top-0 z-20 mb-2 flex justify-end pt-1">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-[#ffffff]/95 text-gray-700 shadow-sm backdrop-blur transition hover:bg-slate-100 hover:text-black dark:border-[#1f1f1f] dark:bg-black/95 dark:text-white/70 dark:hover:bg-[#2f2f2f] dark:hover:text-white"
              aria-label="Close blog modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 border-b border-slate-200 pb-4 dark:border-[#1f1f1f]">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-700 dark:text-white/70">Blog Post</p>
            <h2 className="font-sans text-3xl leading-tight text-black dark:text-white md:text-4xl">{post.title}</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/70">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="mb-6 max-h-90 w-full rounded-xl object-cover"
            />
          ) : null}

          <article className="space-y-4 text-base leading-7 text-gray-700 dark:text-white/80 [&_a]:text-black [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-white [&_blockquote]:border-l-2 [&_blockquote]:border-slate-200 [&_blockquote]:pl-4 dark:[&_blockquote]:border-[#1f1f1f] [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 dark:[&_code]:bg-[#2f2f2f] [&_h1]:font-sans [&_h1]:text-3xl [&_h1]:leading-tight [&_h1]:text-black dark:[&_h1]:text-white [&_h2]:pt-3 [&_h2]:font-sans [&_h2]:text-2xl [&_h2]:text-black dark:[&_h2]:text-white [&_h3]:pt-2 [&_h3]:font-semibold [&_h3]:text-black dark:[&_h3]:text-white [&_li]:ml-5 [&_li]:list-disc [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-slate-100 [&_pre]:p-4 dark:[&_pre]:bg-[#2f2f2f]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BlogModal;
