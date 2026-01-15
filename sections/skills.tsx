const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git",
  "MySQL",
  "Github",
  "Vercel",
  "C++",
  "JavaScript",
  "TypeScript",
  "C",
  "Linux",
  "Data Structures",
  "Algorithms",
  "Neon DB",
  "Postman API",
  "Java"
];

export const SkillComponent = () => {
  return (
        <div className = 'p-2' >
        <p className='font-sans font-bold text-2xl mb-2 md:text-xl text-black dark:text-white'>Skills</p>
        <div className="flex flex-wrap gap-2 max-w-2xl">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
              rounded-md px-2 py-1 text-xs font-sans font-semibold
              bg-black text-white 
              dark:bg-white dark:text-black
              border border-white/10 dark:border-white/5
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-md
            "
            >
              {tech}
            </span>
          ))}
          </div>
        </div>
  )
}