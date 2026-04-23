import EducationCard from "@/components/EducationCard";

const EDUCATION = [
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/amrita.jpg",
        alt: "Amrita Logo",
        institution: "Amrita Vishwa Vidyapeetham",
        detail: "B.Tech • Jun 2024 - Present",
    },
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/ascent.png",
        alt: "Ascent Logo",
        institution: "Ascent Classes",
        detail: "Intermediate (MPC) • Marks: 959/1000",
    },
    {
        logo: "https://ik.imagekit.io/sarvan/Portfolio/sri_chaitanya.png",
        alt: "Sri Chaitanya Logo",
        institution: "Sri Chaitanya Techno School",
        detail: "SSC • Marks: 583/600",
    },
];

const EducationSection = () => {
    return (
        <div>
            <p className='font-sans font-bold text-2xl mb-4 md:text-3xl text-black dark:text-white'>Education</p>
            <div className='space-y-4'>
                {EDUCATION.map((edu) => (
                    <EducationCard key={edu.institution} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default EducationSection;