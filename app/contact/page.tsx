"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { toast } from "sonner";
import { LuMessageSquareShare } from "react-icons/lu";
import contactBg from "./contact-bg.jpg";
import { ContactHeaderBar } from "@/components/ContactHeader";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    role: formData.get("role"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                }),
            });

            if (res.ok) {
                toast.success("Message sent successfully");
                form.reset();
            } else {
                toast.error("Failed to send message");
            }
        } catch {
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-5xl h-[600px] bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden flex shadow-2xl border border-gray-200 dark:border-gray-800">
                <ContactHeaderBar />
                {/* LEFT PANEL – VISUAL */}
                <div className="hidden md:flex w-1/2 relative">
                    <Image
                        src={contactBg}
                        alt="Contact visual"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">
                        <p className="text-4xl font-light text-white leading-snug">
                            Let’s Build <br />
                            <span className="font-semibold">Something Meaningful</span>
                        </p>
                    </div>
                </div>

                {/* RIGHT PANEL – FORM */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="w-full max-w-sm px-8 space-y-5"
                    >
                        <h2 className="text-center text-2xl font-semibold text-black dark:text-white flex justify-center items-center gap-2">
                            Contact Me <LuMessageSquareShare />
                        </h2>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Let’s connect and build something useful
                        </p>

                        {/* Inputs */}
                        <input
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Your Email"
                            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <select
                            name="role"
                            required
                            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Who are you?</option>
                            <option value="Recruiter">Recruiter</option>
                            <option value="Project Collaboration">Project Collaboration</option>
                            <option value="Friend">Friend</option>
                        </select>

                        <input
                            name="subject"
                            required
                            placeholder="Subject"
                            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            name="message"
                            rows={4}
                            required
                            placeholder="Your Message"
                            className="w-full bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Submit */}
                        <button
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {/* Footer */}
                        <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                            Or email me at{" "}
                            <a
                                href="mailto:sarvankumarnagarampalli478@gmail.com"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                sarvankumarnagarampalli478@gmail.com
                            </a>
                        </p>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
