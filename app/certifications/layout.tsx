export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
            className=" bg-white dark:bg-black"
        >
            {children}
        </section>
    );
}
