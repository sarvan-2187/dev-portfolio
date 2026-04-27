"use client";

import ExperienceTimeline from "@/components/ExperienceTimeline";

const EXPERIENCES = [
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/avv-logo.png",
        alt: "Amrita Tantrotsav Logo",
        role: "MERN Stack Developer",
        subtitle: "Tantrotsav 2026 • Dec 2024 - Feb 2025",
        linkText: "View Website",
        linkUrl: "https://tantrotsav.amrita.edu/",
        bullets: [
            <>Part of the <strong>Website Team</strong> for organizing the <strong>National Level Tech Fest of Amrita Vishwa Vidyapeetham, Chennai Campus.</strong></>,
            <>Managed <strong>Live Production Deployments</strong> on <strong>remote servers</strong>, handling <strong>secure file transfers, build updates, environment configuration changes,</strong> and ensuring zero-downtime releases.</>,
            <>Handled live <strong>Production Database Operations</strong> using <strong>MongoDB</strong>, including <strong>user registration updates, data corrections,</strong> and ensuring real-time data consistency.</>,
            <>Resolved <strong>15+ payment discrepancies and transaction failures </strong> by coordinating with the <strong>CCAvenue</strong> payment gateway and validating backend payment records.</>,
            <>Built a responsive website and followed modern UI design techniques using <strong>React.js</strong> and <strong>Tailwind CSS</strong>.</>,
            <>Integrated <strong>ImageKit CDN</strong> for <strong>optimized delivery</strong> of posters, flyers, and media assets, ensuring <strong>fast load times and efficient asset management.</strong></>,
            <>The platform efficiently managed <strong>3,500+</strong> registrations from <strong>participants across 10 states</strong>, supporting <strong>60+ events</strong> with secure transaction handling.</>,
        ],
    },
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/nueronix.png",
        alt: "Neuronix Logo",
        role: "Coordinator",
        subtitle: "Neuronix Club • Jun 2024 - Present",
        linkText: "View Website",
        linkUrl: "https://neuronix-avv.vercel.app/",
        bullets: [
            <>Organized and executed <strong>Flash 2.0</strong>, a <strong>4-hour Competitive Hackathon</strong> featuring <strong>25+</strong> teams and <strong>80+</strong> participants.</>,
            <>Managed team registrations, evaluation rounds, and <strong>final shortlisting</strong> in coordination with <strong>Principal and Faculty</strong> as reviewers.</>,
            <>Ensured structured event flow, <strong>judging coordination</strong>, and <strong>timely result announcements</strong>, contributing to the event&apos;s grand success.</>,
            <>Developed an <strong>industry-grade web platform</strong> for the Neuronix community with a scalable and responsive architecture.</>,
            <>Designed and implemented <strong>Role-Based Access Control</strong> {"(RBAC)"} to ensure secure and structured event management workflows.</>,
            <>Engineered an <strong>Admin-driven Event Approval System</strong> to streamline submissions, moderation, and publishing process of events.</>,
        ],
    },
];

const ExperienceSection = () => {
    return (
        <div className="p-2">
            <p className='font-serif font-bold text-2xl mb-8 md:text-3xl text-black dark:text-white'>Work Experience</p>

            <ExperienceTimeline experiences={EXPERIENCES} />

            <div className='mt-12 font-sans font-semibold text-center md:text-left text-gray-700 dark:text-gray-300'>
                Also, <span>I am currently open to internship opportunities in web development</span>. If you have an exciting role that matches my skills, please feel free to reach out!
            </div>
        </div>
    );
};

export default ExperienceSection;
