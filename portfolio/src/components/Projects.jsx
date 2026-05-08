import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title: "BOOK REVIEW APP",
        description:
            "Built a full-stack Book Review platform using the MERN stack where users can browse books, write reviews, and rate them. Includes authentication, protected routes, user profiles, CRUD operations, and a responsive UI with real-time updates.",
        tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        github: "https://github.com/Megdelawit365/Book-review-app",
        link: "https://book-review-app-5.onrender.com/",
    },
    {
        title: "NOTES APP",
        description:
            "Developed a notes management application allowing users to create, edit, delete, and organize notes efficiently. Features include secure authentication, REST API integration, and a clean responsive interface for productivity.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/Megdelawit365/mern-notes-app",
        link: "https://mern-notes-app-frontend-af03.onrender.com/",
    },
    {
        title: "E-COMMERCE APP",
        description:
            "Built a complete e-commerce platform with Laravel including product management, shopping cart, checkout system, order tracking, and admin dashboard for managing inventory and users.",
        tags: ["Laravel", "PHP", "MySQL", "Blade", "CRUD"],
        github: "https://github.com/Megdelawit365/Laravel-Ecommerce",
        link: "#",
    },
    {
        title: "LIBRARY MANAGEMENT SYSTEM",
        description:
            "Designed a library management system using Laravel to handle book inventory, borrowing records, user management, and admin controls with clean UI and efficient database structure.",
        tags: ["Laravel", "PHP", "MySQL", "Admin Panel"],
        github: "https://github.com/Megdelawit365/Library-Book-Borrowing-System",
        link: "#",
    },
]

const Projects = () => {
    return (
        <div className='min-h-screen pt-30 text-gray-600 mb-30 md:px-36 dark:text-[#ccd6f6] flex flex-col gap-4'>

            <div className='flex flex-row font-mono justify-start items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-5xl font-[900] whitespace-nowrap'>
                    PROJECTS
                </h1>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        github={project.github}
                        link={project.link}
                    />
                ))}
            </div>

        </div>
    )
}

export default Projects