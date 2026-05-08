import React from "react";

const XCard = ({
    title,
    company,
    date,
    description,
    tags,
    side,
    icon,
}) => {
    return (
        <div className='grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start'>

            {side === "left" ? (
                <>
                    <div className='flex flex-col bg-gray-50 dark:bg-[#0a192f] border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-sm hover:shadow-md transition'>

                        <span className="md:hidden text-sm text-gray-500 dark:text-[#64ffda]  mb-4">
                            {date}
                        </span>

                        <span className='font-bold text-xl text-gray-800 dark:text-[#ccd6f6]'>
                            {title}
                        </span>

                        <span className="font-semibold text-gray-600 dark:text-gray-400 mb-4">
                            {company}
                        </span>

                        <span className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
                            {description}
                        </span>

                    </div>

                    <div className="relative mt-6 hidden md:flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-md z-10 text-gray-700 dark:text-[#64ffda]">
                            {icon}
                        </div>

                        <div className="absolute top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700 z-0"></div>

                    </div>

                    <div className="hidden md:block mt-8 text-xl font-bold text-gray-700 dark:text-[#ccd6f6]">
                        <span>{date}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className='hidden md:block text-right mt-8 text-xl font-bold text-gray-700 dark:text-[#ccd6f6]'>
                        <span>{date}</span>
                    </div>

                    <div className="relative mt-6 hidden md:flex flex-col items-center">

                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-md z-10 text-gray-700 dark:text-[#64ffda]">
                            {icon}
                        </div>

                        <div className="absolute top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700 z-0"></div>

                    </div>

                    <div className='flex flex-col bg-gray-50 dark:bg-[#0a192f] border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-sm hover:shadow-md transition'>

                        <span className="md:hidden  text-sm text-gray-500 dark:text-[#64ffda]  mb-4">
                            {date}
                        </span>

                        <span className='font-bold text-xl text-gray-800 dark:text-[#ccd6f6]'>
                            {title}
                        </span>

                        <span className="font-semibold text-gray-600 dark:text-gray-400 mb-4">
                            {company}
                        </span>

                        <span className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed">
                            {description}
                        </span>

                    </div>
                </>
            )}
        </div>
    )
}

export default XCard