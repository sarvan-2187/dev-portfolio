import ProjectCard from "@/components/ProjectCard";

const FeaturedProjectsSection = () => {
    return (
        <div className="font-sans p-2 mb-6">
            <h2 className="font-bold text-2xl mb-4 text-black dark:text-white">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard
                    title="Stumps & Stories"
                    image="https://ik.imagekit.io/sarvan/Portfolio/og.png"
                    link="https://newsletter.sarvankumar.in/"
                    github="https://github.com/sarvan-2187/stumps_and_stories"
                />
                <ProjectCard
                    title="Savynce"
                    image="https://ik.imagekit.io/sarvan/Portfolio/savynce.png"
                    link="https://savynce-price-drops.vercel.app/"
                    github="https://github.com/sarvan-2187/savynce-price-drop-tracker"
                />
                <ProjectCard
                    title="Networq"
                    image="https://ik.imagekit.io/sarvan/Portfolio/networq_og.png"
                    link="https://networq.sarvankumar.in/"
                    github="https://github.com/sarvan-2187/networq"
                />
            </div>
        </div>
    );
};

export default FeaturedProjectsSection;
