"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const words =
    "Our body doesn't get tired - our mind does. The difference between average and extraordinary lies in how far you push when your mind says stop. - Hardik Pandya";

export function Banner() {
    return (
        <div className="p-2 mb-8">
            <span className="text-3xl"><FaQuoteLeft /></span>
            <TextGenerateEffect
                words={words}
                highlight="Hardik Pandya"
                className="tracking-wide leading-snug"
            />
            <span className="flex justify-end text-3xl"><FaQuoteRight /></span>
        </div>
    );
}
