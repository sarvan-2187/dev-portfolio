import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";

const NotFoundPage = () => {
    return (
        <div className="h-screen font-sans flex flex-col bg-white dark:bg-black" suppressHydrationWarning={true}>

            <div className="w-full bg-black text-white dark:bg-white dark:text-black text-3xl font-bold">
                <Marquee speed={40} pauseOnHover className="py-3">
                    {Array.from({ length: 80 }).map((_, i) => (
                        <span key={i} className="mx-6">404</span>
                    ))}
                </Marquee>
            </div>

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="max-w-xl w-full text-center">

                    <Image
                        src="https://ik.imagekit.io/sarvan/Portfolio/memedog.png"
                        alt="404 Not Found"
                        width={100}
                        height={100}
                        className="mx-auto mb-6 drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]
                        dark:drop-shadow-[0_0_3px_rgba(59,130,246,0.9)]"
                        draggable={false}
                    />

                    <h2 className="font-bold text-2xl md:text-5xl mb-2">
                        Uh Oh, Page Not Found!
                    </h2>

                    <p className="font-medium text-sm mb-6 text-gray-600 dark:text-gray-400">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Button asChild>
                            <Link href="/">Home</Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="/contact">Contact Me</Link>
                        </Button>
                    </div>

                </div>
            </div>

            <div className="w-full bg-[#efefef] dark:bg-[#1a1a1a] dark:text-white text-3xl font-bold">
                <Marquee speed={40} pauseOnHover className="py-3">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <span key={i}>
                            &nbsp;PAGE NOT FOUND&nbsp;{"•"}
                        </span>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default NotFoundPage;
