import { Moon } from 'lucide-react'
import React from 'react'
import Menu from './Menu'

const NavBar = ({ refs }) => {

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className='flex backdrop-blur-sm bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[size:30px_30px] flex-row w-full justify-between items-center fixed top-0 left-0 right-0 md:px-20 p-5 px-7'>
            <span
                onClick={() => scrollTo(refs.heroRef)}
                className="font-['Reenie_Beanie'] text-[1.8rem] p-0 m-0 hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer"
            >
                Megdelawit
            </span>

            <div className='hidden md:flex flex-row w-fit justify-between items-center font-semibold text-gray-400 gap-10 text-[0.85rem]'>
                <button onClick={() => scrollTo(refs.heroRef)} className='hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer'>
                    HOME
                </button>

                <button onClick={() => scrollTo(refs.skillsRef)} className='hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer'>
                    SKILLS
                </button>

                <button onClick={() => scrollTo(refs.projectsRef)} className='hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer'>
                    PROJECTS
                </button>

                <button onClick={() => scrollTo(refs.contactRef)} className='hover:text-[var(--primary)] hover:scale-[1.05] transition-all duration-400 cursor-pointer'>
                    CONTACT
                </button>
            </div>

            <div className='md:hidden block'>
                <Menu refs={refs} />
            </div>
        </div>
    )
}

export default NavBar