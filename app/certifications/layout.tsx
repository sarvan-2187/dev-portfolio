export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
            className="min-h-screen bg-white dark:bg-black"
        >
            {children}
        </section>
    );
}
