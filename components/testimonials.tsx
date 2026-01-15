"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
    return (
        <div>
            <h2 className='font-sans font-bold text-2xl mb-2 text-black dark:text-white'>Testimonials</h2>
            <div className="font-sans rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
        
    );
}

const testimonials = [
    {
        quote:
            "Sarvan has a rare balance of technical skill and practical thinking. He doesn't just build projects—he builds solutions that actually work.",
        name: "Sahil",
        title: "Teammate & Developer",
    },
    {
        quote:
            "Working with Sarvan was effortless. He understands problems quickly and turns ideas into clean, functional code.",
        name: "Mohan",
        title: "UI Designer",
    },
    {
        quote:
            "Sarvan's ability to integrate AI into real-world applications is impressive. His projects feel purposeful, not experimental.",
        name: "Hackathon Mentor",
        title: "Industry Mentor",
    },
    {
        quote:
            "He takes ownership of his work and pays attention to the smallest details. That's something you don't see often at this stage.",
        name: "Faculty Reviewer",
        title: "Academic Mentor",
    },
    {
        quote:
            "Sarvan approaches development with discipline and curiosity. He's always learning, improving, and refining his craft.",
        name: "Peer Developer",
        title: "Collaborator",
    },
    {
        quote:
            "What stands out about Sarvan is his consistency. Whether it's backend logic or frontend polish, he delivers reliable results.",
        name: "Project Collaborator",
        title: "Full-Stack Developer",
    },
];

