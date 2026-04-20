"use client";

import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { motion } from "framer-motion";

export default function CLIPage() {
  return (
    <main className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-start overflow-hidden pt-8 md:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-sans text-black dark:text-white">
            Terminal Mode
          </h1>
        </div>
        <InteractiveTerminal />
      </motion.div>
    </main>
  );
}
