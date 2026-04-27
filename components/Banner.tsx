"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const words =
    "Our body doesn't get tired - our mind does. The difference between average and extraordinary lies in how far you push when your mind says stop. - Hardik Pandya";

export function Banner() {
    return (
        <div className="py-8">
            <span className="text-4xl"><FaQuoteLeft /></span>
            <TextGenerateEffect
                words={words}
                highlight="Hardik Pandya"
                className="font-serif text-2xl md:text-3xl tracking-wide leading-snug"
            />
            <span className="flex justify-end text-4xl"><FaQuoteRight /></span>
        </div>
    );
}
