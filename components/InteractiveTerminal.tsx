"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CommandResponse {
  type: "text" | "list" | "link" | "error";
  content: string | string[] | { label: string; url: string }[];
}

const COMMAND_DATA: Record<string, CommandResponse> = {
  help: {
    type: "list",
    content: [
      "about          - Learn more about me",
      "skills         - See my technical stack",
      "projects       - Explore my recent works",
      "certifications - View my professional credentials",
      "contact        - Get in touch",
      "clear          - Clear the terminal",
      "exit           - Return to graphical portfolio",
    ],
  },
  whoami: {
    type: "text",
    content: "I am Sarvan Kumar, a Computer Science student at Amrita Vishwa Vidhyapeetham. I build reliable, modern web applications with a focus on clarity, performance, and real-world impact.",
  },
  about: {
    type: "list",
    content: [
      "Field: Computer Science (B.Tech)",
      "Institute: Amrita Vishwa Vidhyapeetham, Chennai",
      "Current: 4th Semester (Sophomore)",
      "Location: Chennai, India",
      "Age: 19 Years",
      "",
      "Focus: Building reliable, modern web applications with clarity & performance.",
      "Interests: Advanced Algorithms, Data Structures, and Scalable Backend Systems.",
      "I'm passionate about participating in Hackathons and building real-world solutions.",
    ],
  },
  skills: {
    type: "list",
    content: [
      "Frontend: React.js, Next.js, Tailwind CSS, TypeScript, JavaScript",
      "Backend & Databases: SQL, PostgreSQL, Python, C++, C",
      "Tools: Git, Github, Vercel, Postman",
      "Core: Data Structures, Algorithms",
    ],
  },
  projects: {
    type: "link",
    content: [
      { label: "Tantrotsav", url: "https://tantrotsav.amrita.edu/" },
      { label: "Savynce - Price Tracker", url: "https://savynce-price-drop-tracker.vercel.app/" },
      { label: "Stumps & Stories - Cricket Newsletter", url: "https://stumps-and-stories.vercel.app/" },
      { label: "Networq - Video Conferencing", url: "https://project-networq.vercel.app/" },
    ],
  },
  certifications: {
    type: "link",
    content: [
      { label: "Gemini for University Students (Google)", url: "https://edu.google.accredible.com/9ac77ba7-0ef6-4805-86f7-23a9f2e48bad#acc.O4IW109E" },
      { label: "Generative AI Fundamentals (Databricks)", url: "https://credentials.databricks.com/b8cc4763-1b59-4012-a045-239bd6ccc5d9#acc.Q7abUOmF" },
      { label: "Next.JS Fundamentals (Vercel)", url: "https://drive.google.com/file/d/1Nyr_oV2nxGu_0y-2W-cHb4d9AT2WCJL8/view" },
      { label: "Postman Student Expert (Postman)", url: "https://drive.google.com/file/d/10sE7m43Fl7PxX9tB_UbLsVbcADWMUaEi/view" },
      { label: "SEO Expert (HubSpot)", url: "https://app-na2.hubspot.com/academy/achievements/5btx0b7q/en/1/nagarampalli-sarvan-kumar/seo" },
    ],
  },
  contact: {
    type: "link",
    content: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nagarampalli-sarvan-kumar/" },
      { label: "GitHub", url: "https://github.com/sarvan-2187" },
      { label: "Twitter", url: "https://x.com/SarvanKumar2187" },
      { label: "Medium", url: "https://medium.com/@sarvankumarnagarampalli478" },
    ],
  },
};

interface HistoryItem {
  command: string;
  response?: CommandResponse;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { command: "initial", response: { type: "text", content: "Welcome to Sarvan's CLI Portfolio. Type 'help' to see available commands." } }
  ]);
  const [sentCommands, setSentCommands] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const [cursorVisible, setCursorVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    
    // Add to history tracking
    setSentCommands(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    if (cleanCmd === "clear") {
      setHistory([]);
      return;
    }

    if (cleanCmd === "exit") {
      router.push("/");
      return;
    }

    const response = COMMAND_DATA[cleanCmd] || {
      type: "error",
      content: `Command not found: ${cleanCmd}. Type 'help' for available commands.`,
    };

    setHistory((prev) => [...prev, { command: cmd, response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (sentCommands.length > 0 && historyIndex < sentCommands.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(sentCommands[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(sentCommands[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  const prompt = (
    <span className="text-neutral-500">
      <span className="text-sky-500">sarvan-kumar</span>
      <span className="text-emerald-600">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-neutral-500">$</span>{" "}
    </span>
  );

  return (
    <div 
      className="mx-auto w-full max-w-5xl font-mono text-sm h-[70vh] flex flex-col"
    >
      <div className="flex-1 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-sm flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center gap-2 bg-neutral-800 px-4 py-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="truncate text-xs text-neutral-400">
              Terminal
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          data-lenis-prevent
          className="flex-1 overflow-y-auto p-4 font-mono terminal-scrollbar"
        >
          <AnimatePresence mode="popLayout">
            {history.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3"
              >
                {item.command !== "initial" && (
                  <div className="flex gap-2">
                    {prompt}
                    <span className="text-emerald-400">{item.command}</span>
                  </div>
                )}
                
                {item.response && (
                  <div className="mt-1 ml-2 text-neutral-300">
                    {item.response.type === "text" && (
                      <p className="leading-relaxed">{item.response.content as string}</p>
                    )}
                    
                    {item.response.type === "list" && (
                      <div className="flex flex-col gap-1">
                        {(item.response.content as string[]).map((line, idx) => (
                          <p key={idx} className="leading-relaxed">{line}</p>
                        ))}
                      </div>
                    )}

                    {item.response.type === "link" && (
                      <div className="flex flex-col gap-1">
                        {(item.response.content as { label: string; url: string }[]).map((link, idx) => (
                          <a 
                            key={idx} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline flex items-center gap-2"
                          >
                            ➜ {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {item.response.type === "error" && (
                      <p className="text-red-400">{item.response.content as string}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex gap-2 items-start relative">
            <div className="shrink-0">{prompt}</div>
            <div className="relative flex-1 flex flex-wrap items-center">
              <input
                ref={inputRef}
                type="text"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 w-full bg-transparent border-none outline-none text-emerald-400 caret-transparent z-10"
                spellCheck={false}
                autoComplete="off"
              />
              <span className="text-emerald-400 whitespace-pre-wrap break-all">
                {input}
                {cursorVisible && (
                  <span className="inline-block h-4 w-2 bg-neutral-300 align-middle ml-0.5" />
                )}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
