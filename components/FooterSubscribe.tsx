"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

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
        <div className="w-full rounded-lg border bg-[#f4f4f4] p-4 dark:bg-[#121212]">
            <div className="flex gap-4 items-center justify-items-start">
                <Image
                    src="https://ik.imagekit.io/sarvan/assets_cricket/sns.ico"
                    alt="Stumps & Stories"
                    width={48}
                    height={48}
                    className="shrink-0"
                />
                <h3 className="mb-2 text-xl md:text-3xl font-semibold">
                    Subscribe to Stumps & Stories Newsletter
                </h3>
            </div>
                <p className="my-4 text-sm text-gray-600 dark:text-gray-400">
                    Get the latest cricket stories, updates, and exclusive content delivered straight to your inbox.
                </p>
            
            <div className="flex flex-wrap flex-col items-center gap-3">
                <div className="flex w-full items-center gap-3">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black"
                        disabled={loading}
                    />

                    <Button onClick={handleSubscribe} disabled={loading}>
                        {loading ? "Subscribing…" : "Subscribe"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
