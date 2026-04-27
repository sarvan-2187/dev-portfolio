"use client";

import React from "react";
import Shuffle from "./Shuffle";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
    >
      <div className="flex flex-col items-center gap-4">
        <Shuffle 
          text="Loading" 
          shuffleDirection="up" 
          duration={0.5} 
          stagger={0.1}
          animationMode="random"
          loop={true}
          loopDelay={0.2}
          className="text-4xl md:text-6xl tracking-tighter"
          style={{ fontFamily: "var(--font-metrophobic-sans)"}}
        />
        <div className="w-48 h-[2px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
          <div className="absolute inset-0 bg-black dark:bg-white animate-loading-progress origin-left" />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
