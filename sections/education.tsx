import ExperienceTimeline from "@/components/ExperienceTimeline";

const EDUCATION = [
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/amrita.jpg",
        alt: "Amrita Logo",
        role: "Amrita Vishwa Vidyapeetham",
        subtitle: "B.Tech • Jun 2024 - Present",
    },
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/ascent.png",
        alt: "Ascent Logo",
        role: "Ascent Classes",
        subtitle: "Intermediate (MPC) • Marks: 959/1000",
    },
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/sri_chaitanya.png",
        alt: "Sri Chaitanya Logo",
        role: "Sri Chaitanya Techno School",
        subtitle: "SSC • Marks: 583/600",
    },
];

const EducationSection = () => {
    return (
        <div className="py-8">
            <p className='font-serif font-bold text-2xl mb-8 md:text-3xl text-black dark:text-white'>Education</p>

            <ExperienceTimeline experiences={EDUCATION} />
        </div>
    );
};

export default EducationSection;