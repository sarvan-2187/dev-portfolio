import ProjectCard from "@/components/ProjectCard";

const FeaturedProjectsSection = () => {
    return (
        <div className="font-sans py-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-black dark:text-white">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProjectCard
                    title="Stumps & Stories"
                    image="https://ik.imagekit.io/sarvan/Portfolio/og.png"
                    link="https://stumps-and-stories.vercel.app/"
                    github="https://github.com/sarvan-2187/stumps_and_stories"
                />
                <ProjectCard
                    title="Savynce"
                    image="https://ik.imagekit.io/sarvan/Portfolio/savynce.png"
                    link="https://savynce-price-drop-tracker.vercel.app/"
                    github="https://github.com/sarvan-2187/savynce-price-drop-tracker"
                />
                <ProjectCard
                    title="Networq"
                    image="https://ik.imagekit.io/sarvan/Portfolio/networq_og.png"
                    link="https://project-networq.vercel.app/"
                    github="https://github.com/sarvan-2187/networq"
                />
            </div>
        </div>
    );
};

export default FeaturedProjectsSection;
