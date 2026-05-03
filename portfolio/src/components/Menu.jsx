import { MenuIcon, X } from 'lucide-react'
import React, { useState } from 'react'

const Menu = ({ refs }) => {
    const [open, setOpen] = useState(false)

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        setOpen(false)
    }

    return (
        <div>
            <MenuIcon onClick={() => setOpen(true)} />

            <div
                className={`fixed top-0 right-0 h-[100vh] w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex justify-between items-center">
                    <X className="cursor-pointer" onClick={() => setOpen(false)} />
                </div>

                <div className="p-4 flex flex-col gap-4 text-[1.3rem]">
                    <button onClick={() => scrollTo(refs.heroRef)} className='hover:text-[var(--primary)] transition-all duration-300 text-left border-b pb-2'>
                        HOME
                    </button>

                    <button onClick={() => scrollTo(refs.skillsRef)} className='hover:text-[var(--primary)] transition-all duration-300 text-left border-b pb-2'>
                        SKILLS
                    </button>

                    <button onClick={() => scrollTo(refs.projectsRef)} className='hover:text-[var(--primary)] transition-all duration-300 text-left border-b pb-2'>
                        PROJECTS
                    </button>

                    <button onClick={() => scrollTo(refs.contactRef)} className='hover:text-[var(--primary)] transition-all duration-300 text-left border-b pb-2'>
                        CONTACT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu