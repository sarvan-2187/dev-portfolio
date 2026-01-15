"use client";

import ContactHeaderBar from "@/components/ContactHeader";
import { LuMessageSquareShare } from "react-icons/lu";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<React.ReactNode>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        setLoading(true);
        setStatus(null);

        try {
            const formData = new FormData(form);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                cache: "no-store",
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    role: formData.get("role"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                }),
            });

            if (res.ok) {
                
                form.reset();
                toast.success("Message sent successfully");
            } else {
                toast.error("Failed to send message");
            }
        } catch (err) {
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen font-sans px-4 lg:px-48">
            <ContactHeaderBar />
            <div className="mt-12 md:mt-4 flex justify-center bg-white dark:bg-[#1a1a1a] rounded-xl">
                <form
                    onSubmit={handleSubmit}
                    className="w-full space-y-4 p-6 rounded-xl shadow-xl"
                >
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        Contact Me <LuMessageSquareShare className="text-[25px] font-bold text-ble-600 dark:text-blue-300"/>
                    </h1>

                    <input
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Your Email"
                        className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                        name="role"
                        required
                        className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Who are you?</option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="Project Collaboration">
                            Project Collaboration
                        </option>
                        <option value="Friend">Friend</option>
                    </select>

                    <input
                        name="subject"
                        required
                        placeholder="Subject"
                        className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Your Message"
                        className="w-full p-2 border rounded dark:bg-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        disabled={loading}
                        className="cursor-pointer w-full p-2 font-bold bg-black text-white dark:bg-white dark:text-black rounded"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
            <div className="pb-12">
            <div className="text-center bg-white p-4 shadow-xl dark:bg-[#1a1a1a] rounded-lg mt-12 md:mt-4 border">
                Have more questions? Feel free to reach out via email at{" "}
                <a
                    href="mailto:sarvankumarnagarampalli478@gmail.com"
                    className="text-blue-600 underline"
                >
                    sarvankumarnagarampalli478@gmail.com
                </a>.
                </div>
            </div>
        </div>
    );
}
