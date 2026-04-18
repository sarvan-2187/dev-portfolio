import { VscVerifiedFilled } from "react-icons/vsc";

type AchievementCardProps = {
    title: string;
    highlight?: string;
    subtitle: string;
    description: string;
    linkText: string;
    linkUrl: string;
};

export default function AchievementCard({
    title,
    highlight,
    subtitle,
    description,
    linkText,
    linkUrl,
}: AchievementCardProps) {
    return (
        <div className='bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex items-start gap-4 p-4 rounded-lg shadow-lg'>
            <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                <VscVerifiedFilled className="text-blue-500 text-3xl" />
            </div>

            <div className='flex flex-col min-w-0'>
                <p className='font-bold text-black dark:text-white text-lg'>
                    {title}
                    {highlight && (
                        <span className="text-blue-600 dark:text-blue-300"> {highlight}</span>
                    )}
                </p>
                <p className='text-gray-700 dark:text-white/70 text-sm'>
                    {subtitle}
                </p>

                <div className='p-2 mt-1 bg-gray-100 dark:bg-[#1f1f1f] rounded-lg'>
                    <ul className='text-gray-700 dark:text-white/70 text-xs'>
                        <li>{description}</li>
                        <li className="mt-2">
                            <a
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white font-semibold hover:underline"
                            >
                                {linkText}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
