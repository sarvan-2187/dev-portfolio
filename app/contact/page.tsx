"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { LuSend, LuLoader } from "react-icons/lu";
import ContactHeaderBar from "@/components/ContactHeader";
import Shuffle from "@/components/Shuffle";
import ContactInfo from "@/components/ContactInfo";

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
        w-full px-4 py-3 bg-transparent border-b-2 outline-none transition-all duration-300
        ${errors[field] 
            ? "border-red-500 text-red-500" 
            : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-400"}
        text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600
    `;

    return (
        <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 dot-grid-bg pointer-events-none opacity-50" />
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 px-4 lg:px-58">
                <ContactHeaderBar />
                
                <main className="max-w-7xl mx-auto pt-32 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        
                        {/* Left Section: Info & Hero */}
                        <div className="space-y-16">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-2 text-blue-500 font-semibold tracking-widest text-sm uppercase"
                                >
                                    <span className="w-8 h-[2px] bg-blue-500" />
                                    Contact
                                </motion.div>
                                <div className="space-y-2">
                                    <Shuffle 
                                        text="LET'S TALK"
                                        tag="h1"
                                        className="text-7xl md:text-9xl font-bold tracking-tighter leading-none text-left"
                                        shuffleDirection="up"
                                        duration={0.6}
                                        stagger={0.08}
                                        triggerOnHover={false}
                                    />
                                    <Shuffle 
                                        text="BUSINESS"
                                        tag="h1"
                                        className="text-7xl md:text-9xl font-bold tracking-tighter leading-none opacity-20 text-left"
                                        shuffleDirection="down"
                                        duration={0.6}
                                        stagger={0.08}
                                        triggerOnHover={false}
                                        colorFrom="#888"
                                    />
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <ContactInfo />
                            </motion.div>
                        </div>

                        {/* Right Section: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-xl border border-neutral-100 dark:border-neutral-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className={inputClasses("name")}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className={inputClasses("email")}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Role</label>
                                        <select
                                            value={formData.role}
                                            onChange={(e) => handleInputChange("role", e.target.value)}
                                            className={`${inputClasses("role")} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="bg-white dark:bg-neutral-900">Who are you?</option>
                                            <option value="Recruiter" className="bg-white dark:bg-neutral-900">Recruiter</option>
                                            <option value="Collaboration" className="bg-white dark:bg-neutral-900">Collaboration</option>
                                            <option value="Freelance" className="bg-white dark:bg-neutral-900">Freelance</option>
                                            <option value="Other" className="bg-white dark:bg-neutral-900">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => handleInputChange("subject", e.target.value)}
                                            className={inputClasses("subject")}
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        rows={4}
                                        className={`${inputClasses("message")} resize-none`}
                                        placeholder="Hey! Let's build something cool together..."
                                    />
                                    <div className="flex justify-end">
                                        <p className="text-[10px] text-neutral-500 font-medium tracking-tight">
                                            {formData.message.length}/1000 characters
                                        </p>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-14 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-transform hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {loading ? (
                                        <LuLoader className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <LuSend className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}
