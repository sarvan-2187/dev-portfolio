import AchievementCard from "@/components/AchievementCard";

const ACHIEVEMENTS = [
    {
        title: "Runners Up in Code of Caribbean",
        subtitle: "Event • Mar 2026",
        description: "Cleared all the three rounds and secured the 2nd position.",
        linkText: "View Github",
        linkUrl: "https://github.com/sarvan-2187/code-of-caribbean",
    },
    {
        title: "Top 20 in Suprathon",
        subtitle: "Hackathon • Jul 2025",
        description: "Presented my idea Aarogya AI, a one-stop solution for AI based Health Care in India.",
        linkText: "View Certificate",
        linkUrl: "https://drive.google.com/file/d/1Iv8_6W9TdRom5l0WWjGZKItG5t5HLifE/view",
    },
    {
        title: "Flash 2K25",
        highlight: "(1st Hackathon Win!)",
        subtitle: "Hackathon • Jan 2025",
        description: "Developed Pill-Pal, a web application designed to provide medication reminders for elderly users.",
        linkText: "View Certificate",
        linkUrl: "https://drive.google.com/file/d/1I_xiXDhK_kRg-cbzxEEH8H8YE0BlMTiq/view",
    },
    {
        title: "Academic Excellence Award",
        subtitle: "Academics • Jan 2023",
        description: "Received for outstanding performance in studies at Ascent Classes.",
        linkText: "View Certificate",
        linkUrl: "https://drive.google.com/file/d/1cgFKjL-ebAwq00BPivaLBWJFidU4uzsi/view",
    },
];

const AchievementsSection = () => {
    return (
        <div className='p-2 font-sans mb-8'>
            <p className='font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>
                Achievements
            </p>

            <div className='space-y-4'>
                {ACHIEVEMENTS.map((achievement) => (
                    <AchievementCard key={achievement.title} {...achievement} />
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;