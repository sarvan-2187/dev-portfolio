"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const words =
    "Our body doesn't get tired - our mind does. The difference between average and extraordinary lies in how far you push when your mind says stop. - Hardik Pandya";

export function Banner() {
    return (
        <div className="p-2 mb-8">
            <p className='font-sans font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>My Mindset !</p>
            <span className="text-3xl"><FaQuoteLeft /></span>
            <TextGenerateEffect
                words={words}
                highlight="Hardik Pandya"
            />
            <span className="flex justify-end text-3xl"><FaQuoteRight /></span>
        </div>
    );
}
