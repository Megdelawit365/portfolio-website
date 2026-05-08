import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {

    const skillGroups = [
        {
            title: "FRONTEND",
            skills: ["REACT", "TAILWIND CSS", "JAVASCRIPT", "VITE", "HTML", "CSS"]
        },
        {
            title: "BACKEND",
            skills: ["NODE.JS", "EXPRESS", "REST API", "JWT AUTH", "MIDDLEWARE"]
        },
        {
            title: "DATABASES",
            skills: ["MONGODB", "MONGOOSE", "FIREBASE", "SQL"]
        },
        {
            title: "LANGUAGES",
            skills: ["JAVASCRIPT", "TYPESCRIPT", "PYTHON", "C++"]
        },
        {
            title: "TOOLS & DEV WORKFLOW",
            skills: ["GIT", "GITHUB", "POSTMAN", "VSCODE", "VERCEL", "NETLIFY", "FIGMA"]
        },
        {
            title: "UI / STYLING / DESIGN",
            skills: ["TAILWIND CSS", "RESPONSIVE DESIGN", "FLEXBOX", "GRID", "ANIMATIONS"]
        }
    ]

    return (
        <div className='min-h-screen text-gray-600 mb-12 md:px-36 dark:text-[#ccd6f6] pt-30 flex flex-col gap-4'>

            <div className='flex flex-row font-mono justify-start items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-5xl font-[900] whitespace-nowrap'>
                    SKILLS
                </h1>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 font-mono">

                {skillGroups.map((group, index) => (
                    <SkillCard
                        key={index}
                        title={group.title}
                        skills={group.skills}
                    />
                ))}

            </div>

        </div>
    )
}

export default Skills