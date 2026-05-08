import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({
    title,
    description,
    tags,
    link,
    github
}) => {
    return (
        <div className='group bg-gray-50 dark:bg-[#0a192f] border border-gray-200 dark:border-gray-700 rounded-xl p-7 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'>

            <div className='flex flex-row justify-between items-start gap-4'>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-[#ccd6f6] '>
                        {title}
                    </h1>

                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                        {description}
                    </p>
                </div>

                <div className='hidden md:flex items-center gap-3 min-w-fit'>

                    <a href={github} target="_blank" rel="noreferrer">
                        <div className='w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-[#64ffda] bg-white dark:bg-[#112240] hover:-translate-y-1 transition duration-300'>
                            <FaGithub size={18} />
                        </div>
                    </a>

                    <a href={link} target="_blank" rel="noreferrer">
                        <div className='w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-[#64ffda] bg-white dark:bg-[#112240] hover:rotate-45 transition duration-300'>
                            <ArrowUpRight size={18} />
                        </div>
                    </a>

                </div>

            </div>

            <div className='flex flex-wrap gap-2'>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className='px-3 py-1 text-xs md:text-sm rounded-full bg-white dark:bg-[#112240] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-[#64ffda] '
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className='flex md:hidden items-center gap-3 pt-2'>

                <a href={github} target="_blank" rel="noreferrer">
                    <div className='w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-[#64ffda] bg-white dark:bg-[#112240]'>
                        <FaGithub size={16} />
                    </div>
                </a>

                <a href={link} target="_blank" rel="noreferrer">
                    <div className='w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-[#64ffda] bg-white dark:bg-[#112240]'>
                        <ArrowUpRight size={16} />
                    </div>
                </a>

            </div>

        </div>
    )
}

export default ProjectCard