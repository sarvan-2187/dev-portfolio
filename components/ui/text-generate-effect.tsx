"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  highlight,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  highlight?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    );
  }, [isInView, animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 text-2xl leading-snug tracking-wide text-black dark:text-white">
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            const isHighlighted =
              highlight &&
              highlight.split(" ").includes(word.replace(/[~–—]/g, ""));

            return (
              <motion.span
                key={word + idx}
                className={cn(
                  "inline-block font-sans text-lg opacity-0",
                  isHighlighted &&
                  "text-blue-600 dark:text-blue-400 font-semibold"
                )}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
