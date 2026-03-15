"use client";

import React from "react";
import Shuffle from "./Shuffle";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <Shuffle 
          text="LOADING" 
          shuffleDirection="up" 
          duration={0.5} 
          stagger={0.1}
          animationMode="random"
          loop={true}
          loopDelay={0.2}
          triggerOnHover={false}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        />
        <div className="w-48 h-[2px] bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
          <div className="absolute inset-0 bg-black dark:bg-white animate-loading-progress origin-left" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
