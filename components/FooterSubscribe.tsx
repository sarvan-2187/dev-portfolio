"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import { motion } from "framer-motion";

export function SubscribeFooterInput() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubscribe() {
        if (!email || !email.includes("@")) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(
                "https://stumps-and-stories.vercel.app/api/subscribe",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || "Subscription failed.");
                return;
            }

            toast.success("Subscribed to Newsletter successfully!");
            setEmail("");
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-2xl border border-black/10 dark:border-white/5
                       bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800
                       p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4 items-center mb-4"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="https://ik.imagekit.io/sarvan/assets_cricket/sns.ico"
                        alt="Stumps & Stories"
                        width={48}
                        height={48}
                        className="shrink-0 rounded-lg"
                    />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">
                    Stumps & Stories Newsletter
                </h3>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-sm text-gray-700 dark:text-gray-300"
            >
                Get the latest cricket stories, updates, and exclusive content delivered straight to your inbox.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-3"
            >
                <div className="flex md:flex-row w-full items-center gap-3">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-lg border border-black/10 dark:border-white/10
                                   px-4 py-2.5 text-sm bg-white dark:bg-black/40
                                   text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                   outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                                   transition-all duration-300"
                        disabled={loading}
                    />

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            onClick={handleSubscribe}
                            disabled={loading}
                            className="bg-black dark:bg-white text-white dark:text-black
                                       hover:bg-black/80 dark:hover:bg-white/90
                                       transition-colors duration-300"
                        >
                            {loading ? "Subscribing…" : "Subscribe"}
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
