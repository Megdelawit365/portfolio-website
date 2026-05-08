import React from 'react'
import XCard from './XCard'
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
    {
        title: "BACKEND ENGINEER INTERN",
        company: "KURAZ TECH",
        date: "JUL 2025 — SEP 2025",
        side: "left",
        icon: <Briefcase size={26} />,
        description:
            "Completed a Laravel backend development training while contributing to an interactive educational platform for Ethiopian children. Worked on building admin dashboards, implementing CRUD operations, and collaborating in a team-based development environment.",
        tags: [
            "Laravel",
            "PHP",
            "MySQL",
            "CRUD",
            "REST API",
            "Admin Dashboard",
        ],
    },

    {
        title: "SOFTWARE ENGINEERING TRAINEE",
        company: "A2SV",
        date: "JAN 2026 — PRESENT",
        side: "right",
        icon: <GraduationCap size={26} />,
        description:
            "Selected as a Software Engineering Trainee at A2SV (Africa to Silicon Valley), a program focused on training top African talent in data structures, algorithms, and full-stack development. Engage in intensive problem-solving sessions, peer learning, code reviews, and real-world project building to strengthen engineering and interview skills for global tech opportunities.",
        tags: [
            "DSA",
            "Algorithms",
            "React",
            "Node.js",
            "System Design",
            "Problem Solving",
        ],
    },
];

const Experience = () => {
    return (
        <div className='min-h-screen pt-30 text-gray-600  mb-30 md:px-36 dark:text-[#ccd6f6] flex flex-col gap-4'>

            <div className='flex flex-row font-mono justify-start items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-5xl font-[900] whitespace-nowrap'>EXPERIENCE</h1>
            </div>
            <div className="relative max-w-6xl mx-auto">

                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-300 dark:bg-gray-700"></div>

                <div className="flex flex-col gap-8">

                    {experiences.map((exp, index) => (
                        <XCard
                            key={index}
                            {...exp}
                            icon={exp.icon}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Experience
