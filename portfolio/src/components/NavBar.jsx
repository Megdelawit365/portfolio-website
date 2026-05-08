import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const NavBar = ({ refs }) => {

    const scrollTo = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className='fixed dark:border-none top-0 left-0 right-0 z-50 backdrop-blur-sm dark:bg-[#0a192f] flex border-b border-gray-200 flex-row w-full justify-between items-center md:px-15 p-5 px-7'>

            <span
                onClick={() => scrollTo(refs.heroRef)}
                className="font-[Plaster] dark:text-[#64ffda] text-[1.8rem] p-0 m-0 dark:hover:text-[#64ffda] text-n hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer"
            >
                MA
            </span>

            <div className="hidden md:flex flex-row font-mono gap-10 text-[0.9rem] w-[55rem] pr-4 justify-end text-gray-600 dark:text-gray-400">

                <span onClick={() => scrollTo(refs.heroRef)} className='hover:text-black dark:hover:text-[#64ffda] cursor-pointer'>
                    About
                </span>

                <span onClick={() => scrollTo(refs.skillsRef)} className='hover:text-black dark:hover:text-[#64ffda] cursor-pointer'>
                    Skills
                </span>

                <span onClick={() => scrollTo(refs.projectsRef)} className='hover:text-black dark:hover:text-[#64ffda] cursor-pointer'>
                    Projects
                </span>

                <span onClick={() => scrollTo(refs.xRef)} className='hover:text-black dark:hover:text-[#64ffda] cursor-pointer'>
                    Experience
                </span>

                <span onClick={() => scrollTo(refs.contactRef)} className='hover:text-black dark:hover:text-[#64ffda] cursor-pointer'>
                    Contact
                </span>

            </div>

            <div className='flex flex-row justify-center items-center'>
                <DarkModeToggle />
            </div>

        </div>
    )
}

export default NavBar