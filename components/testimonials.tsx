"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <div>
            <h2 className='font-sans font-bold text-2xl mb-2 text-black dark:text-white'>Testimonials / Recommendations</h2>
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
        quote:"Sarvan stood out for his quick grasp of complex Object Oriented Programming concepts like inheritance, polymorphism, and encapsulation not just understanding them, but applying them effectively in real world scenarios. His projects often reflected strong technical skills, clean coding, and thoughtful software design.  ",
        name: "Dr. Suthir Sriram",
        title: "Associate Professor at Amrita Vishwa Vidhyapeetham",
    },
    {
        quote:"Sarvan's ability to comprehend and apply key concepts such as logic, set theory, graph theory, combinatorics, and mathematical reasoning has been impressive. He excels at connecting these principles with various areas of computer science, including algorithms, data structures, and computational problem-solving.",
        name: "Dr. Ajith Kumar M",
        title: "Assistant Professor at Amrita Vishwa Vidhyapeetham",
    },
    {
        quote:"Sarvan's ability to grasp essential concepts such as vector space, linear transformation, and eigenvalue problems has been commendable. He can apply these concepts in computer science. So, I strongly recommend him for any opportunity to explore and apply his knowledge of linear algebra in the domain of computer science.",
        name: "Dr. Kanagraj Muthuselvan",
        title: "Assistant Professor at Amrita Vishwa Vidhyapeetham",
    },
];

