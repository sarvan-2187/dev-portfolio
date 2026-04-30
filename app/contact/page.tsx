"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { LuSend, LuLoader, LuMail, LuMapPin, LuGithub, LuLinkedin } from "react-icons/lu";

import { StaggerTitle } from "@/components/StaggerTitle";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const CONTACT_LINKS = [
    { icon: LuMail, label: "Email", value: "sarvankumarnagarampalli478@gmail.com", href: "mailto:sarvankumarnagarampalli478@gmail.com" },
    { icon: LuMapPin, label: "Location", value: "Chennai, India" },
    { icon: LuGithub, label: "GitHub", value: "sarvan-2187", href: "https://github.com/sarvan-2187" },
    { icon: LuLinkedin, label: "LinkedIn", value: "nagarampalli-sarvan-kumar", href: "https://linkedin.com/in/nagarampalli-sarvan-kumar" },
];

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
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
        if (!formData.role) newErrors.role = "Who are you?";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Tell me more!";
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
                toast.success("Message sent successfully!");
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

    const inputClasses = (field: string) => `
        w-full px-3 py-3 bg-transparent border-b outline-none transition-all duration-300 text-sm
        ${errors[field]
            ? "border-red-500 text-red-500"
            : "border-neutral-200 dark:border-neutral-800 focus:border-black dark:focus:border-white"}
        text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600
    `;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-sans px-4 lg:px-58"
        >
            <div className="p-2 mt-4 md:mt-4">
                {/* Section title */}
                <div className="">
                    <StaggerTitle
                        text="Contact Me"
                        className="font-serif text-3xl md:text-4xl mb-8 font-bold text-center"
                    />
                </div>

                {/* Contact info cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {CONTACT_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href?.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex items-center gap-3 p-4 rounded-lg outline outline-1 ${item.href ? "hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer" : "cursor-default"}`}
                        >
                            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-slate-100 dark:bg-[#2f2f2f] flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-black dark:text-white" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 dark:text-white/50 font-medium">{item.label}</p>
                                <p className="text-sm font-semibold text-black dark:text-white truncate">{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Form */}
                <div className="bg-[#ffffff] dark:bg-black outline outline-1 rounded-lg p-6">
                    <p className="font-bold text-lg mb-6 text-black dark:text-white">Send a Message</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-white/50 mb-1 block">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className={inputClasses("name")}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-white/50 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className={inputClasses("email")}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-white/50 mb-1 block">Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => handleInputChange("role", e.target.value)}
                                    className={`${inputClasses("role")} appearance-none cursor-pointer`}
                                >
                                    <option value="" className="bg-white dark:bg-black">Who are you?</option>
                                    <option value="Recruiter" className="bg-white dark:bg-black">Recruiter</option>
                                    <option value="Collaboration" className="bg-white dark:bg-black">Collaboration</option>
                                    <option value="Freelance" className="bg-white dark:bg-black">Freelance</option>
                                    <option value="Other" className="bg-white dark:bg-black">Other</option>
                                </select>
                                {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role}</p>}
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 dark:text-white/50 mb-1 block">Subject</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => handleInputChange("subject", e.target.value)}
                                    className={inputClasses("subject")}
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-gray-500 dark:text-white/50 mb-1 block">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                rows={4}
                                className={`${inputClasses("message")} resize-none`}
                                placeholder="Hey! Let's build something cool together..."
                            />
                            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                            <p className="text-[10px] text-neutral-400 mt-1 text-right">
                                {formData.message.length}/1000
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg flex items-center justify-center gap-2 text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {loading ? (
                                <LuLoader className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    Send Message
                                    <LuSend className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}
