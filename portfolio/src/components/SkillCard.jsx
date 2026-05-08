import React from 'react'

const SkillCard = ({ title, skills }) => {
    return (
        <div className='p-6 dark:text-[#ccd6f6] bg-white dark:bg-[#0a192f] dark:border-gray-700 border border-gray-300 text-gray-600'>

            <h2 className='text-lg font-semibold mb-3'>
                {title}
            </h2>

            <div className='flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='px-3  py-1 text-sm border border-gray-400 dark:bg-[#132f4c] dark:border-none dark:text-[#64ffda]  bg-gray-100  transition'
                    >
                        {skill}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SkillCard