"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuTwitter, LuInstagram, LuMail, LuMapPin } from "react-icons/lu";

const socialLinks = [
  { icon: LuGithub, href: "https://github.com/sarvan-2187", label: "GitHub" },
  { icon: LuLinkedin, href: "https://linkedin.com/in/sarvan-kumar", label: "LinkedIn" },
  { icon: LuTwitter, href: "#", label: "Twitter" },
  { icon: LuInstagram, href: "#", label: "Instagram" },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white">Get in touch</h3>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-sm">
          I'm always open to discussing new projects, creative ideas or original designs.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center transition-colors group-hover:bg-blue-500 group-hover:text-white">
            <LuMail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Email</p>
            <p className="text-black dark:text-white font-medium">sarvankumarnagarampalli478@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center transition-colors group-hover:bg-blue-500 group-hover:text-white">
            <LuMapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Location</p>
            <p className="text-black dark:text-white font-medium">Andhra Pradesh, India</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Follow me</p>
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-400 transition-colors hover:text-blue-500 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
