import { Briefcase, Contact, FolderOpen, MessageSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa"

const Menu = ({ refs }) => {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(true)

    let lastScrollY = 0

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setVisible(false)
            } else {
                setVisible(true)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        setOpen(false)
    }

    return (
        <>
            <div
                className={`fixed bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-50 md:hidden transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <div className="flex items-center justify-between gap-4 px-4 py-2 bg-white/90 dark:bg-[#0a192f] backdrop-blur-md shadow-sm w-full rounded-xl dark:border dark:border-gray-700">

                    <button onClick={() => scrollTo(refs.heroRef)} className="flex flex-col items-center text-[10px] text-gray-500 dark:text-[#ccd6f6]">
                        <Contact size={16} className="text-gray-600 dark:text-[#ccd6f6]" />
                        About
                    </button>

                    <button onClick={() => scrollTo(refs.skillsRef)} className="flex flex-col items-center text-[10px] text-gray-500 dark:text-[#ccd6f6]">
                        <FaCode size={16} className="text-gray-600 dark:text-[#ccd6f6]" />
                        Skills
                    </button>

                    <button onClick={() => scrollTo(refs.projectsRef)} className="flex flex-col items-center text-[10px] text-gray-500 dark:text-[#ccd6f6]">
                        <FolderOpen size={16} className="text-gray-600 dark:text-[#ccd6f6]" />
                        Projects
                    </button>

                    <button onClick={() => scrollTo(refs.xRef)} className="flex flex-col items-center text-[10px] text-gray-500 dark:text-[#ccd6f6]">
                        <Briefcase size={16} className="text-gray-600 dark:text-[#ccd6f6]" />
                        Experience
                    </button>

                    <button onClick={() => scrollTo(refs.contactRef)} className="flex flex-col items-center text-[10px] text-gray-500 dark:text-[#ccd6f6]">
                        <MessageSquare size={16} className="text-gray-600 dark:text-[#ccd6f6]" />
                        Contact
                    </button>

                </div>
            </div>
        </>
    )
}

export default Menu