"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { LuMessageSquareShare, LuMail, LuUser, LuBriefcase, LuHeading2 } from "react-icons/lu";
import contactBg from "./contact-bg.jpg";
import ContactHeaderBar from "@/components/ContactHeader";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.role) newErrors.role = "Please select a role";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setLoading(true);
        setErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: "", email: "", role: "", subject: "", message: "" });
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch {
            toast.error("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
                filter: "blur(10px)",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="px-4 font-sans lg:px-58 bg-white dark:bg-black min-h-screen"
            suppressHydrationWarning
        >
            {/* Header */}
            <ContactHeaderBar />

            {/* Content */}
            <div className="mt-12 flex justify-center">
                <div className="w-full max-w-5xl bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden flex shadow-2xl border border-gray-200 dark:border-gray-800">

                    {/* LEFT PANEL */}
                    <div className="hidden md:flex w-1/2 relative">
                        <Image
                            src={contactBg}
                            alt="Contact visual"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                            <p className="text-4xl font-light text-white leading-snug">
                                Let's Build <br />
                                <span className="font-semibold">Something Meaningful</span>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL – FORM */}
                    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-sm space-y-6"
                        >
                            <div className="text-center">
                                <h2 className="text-3xl font-semibold text-black dark:text-white flex justify-center items-center gap-2 mb-2">
                                    Contact Me <LuMessageSquareShare className="w-7 h-7" />
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Let's connect and build something useful
                                </p>
                            </div>

                            {/* Name Input */}
                            <div>
                                <div className="relative">
                                    <LuUser className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        placeholder="Your Name"
                                        aria-label="Name"
                                        className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-[#111] border rounded-lg text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                        }`}
                                    />
                                </div>
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <div className="relative">
                                    <LuMail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="Your Email"
                                        aria-label="Email"
                                        className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-[#111] border rounded-lg text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                        }`}
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Role Select */}
                            <div>
                                <div className="relative">
                                    <LuBriefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                                    <select
                                        value={formData.role}
                                        onChange={(e) => handleInputChange("role", e.target.value)}
                                        aria-label="Role"
                                        className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-[#111] border rounded-lg text-sm text-black dark:text-white appearance-none transition focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                                            errors.role ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                        }`}
                                    >
                                        <option value="">Who are you?</option>
                                        <option value="Recruiter">Recruiter</option>
                                        <option value="Project Collaboration">Project Collaboration</option>
                                        <option value="Friend">Friend</option>
                                    </select>
                                </div>
                                {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
                            </div>

                            {/* Subject Input */}
                            <div>
                                <div className="relative">
                                    <LuHeading2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => handleInputChange("subject", e.target.value)}
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-[#111] border rounded-lg text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                        }`}
                                    />
                                </div>
                                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <div className="relative">
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        rows={4}
                                        placeholder="Your Message"
                                        aria-label="Message"
                                        className={`w-full px-3 py-2.5 bg-white dark:bg-[#111] border rounded-lg text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-600 resize-none transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                        }`}
                                    />
                                </div>
                                <div className="flex justify-between items-start">
                                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                    <p className="mt-1 text-xs text-gray-500 ml-auto">{formData.message.length}/1000</p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2.5 rounded-lg hover:from-blue-500 hover:to-blue-400 transition disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {/* Email Fallback */}
                            <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                                Or email me at{" "}
                                <a
                                    href="mailto:sarvankumarnagarampalli478@gmail.com"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition"
                                >
                                    sarvankumarnagarampalli478@gmail.com
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
