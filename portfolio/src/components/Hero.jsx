import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import GitHubGraph from './GitHubGraph';
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import GithubGraph2 from './GithubGraph2';
import Menu from './Menu';

const Hero = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className='overflow-x-clip pt-44 md:pt-44  md:h-[150vh] mb-20 md:px-36 justify-center text-gray-600 flex flex-col'>

            <div className='flex flex-col gap-1  md:h-[72vh] justify-center md:justify-end'>

                <motion.a
                    href="/Megdelawit_Aynalem_Resume1.pdf"
                    download
                    custom={0}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="w-fit dark:text-[#64ffda] dark:hover:bg-transparent cursor-pointer flex items-center gap-2 md:px-4 py-2 font-mono hover:bg-gray-100 transition"
                >
                    <ArrowDownToLine size={20} />
                    <span>DOWNLOAD RESUME.PDF</span>
                </motion.a>

                <motion.span
                    custom={1}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-2xl lg:whitespace-nowrap dark:text-[#ccd6f6] z-0 lg:text-[5rem] md:-rotate-1 md:hover:rotate-0 my-4 text-gray-600 font-[900]"
                >
                    MEGDELAWIT AYNALEM
                </motion.span>

                <motion.span
                    custom={2}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="lg:text-[4.8rem] lg:whitespace-nowrap dark:text-[#8892b0] text-5xl animate-pulse md:rotate-1 md:hover:rotate-0 text-gray-400 font-[900]"
                >
                    FULL-STACK DEVELOPER <br />
                </motion.span>

                <motion.span
                    custom={3}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className='mt-6 font-mono dark:text-[#838dab] w-[100%] font-[400] text-justify'
                >
                    I'm a Software Engineering student interested in web development. I enjoy
                    working across both frontend and backend and I'm currently sharpening my
                    skills in data structures and algorithms
                    <span className='hidden md:inline'>focused on sharpening my
                        skills in data structures and algorithms to improve my problem-solving ability. I craft fast, tactile web experiences with delightful micro-interactions.
                    </span>
                </motion.span>

            </div>

            <GitHubGraph className="hidden md:block" username="Megdelawit365" />
            <GithubGraph2 className="md:hidden" username="Megdelawit365" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 dark:text-[#ccd6f6] mt-20">

                <div className="bg-white rounded-lg dark:bg-[#0a192f] shadow-sm dark:border dark:border-gray-700 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                    <span className="text-4xl md:text-5xl font-bold">2+</span>
                    <span className="text-xs mt-2 text-gray-500 uppercase tracking-wide">
                        Years Experience
                    </span>
                </div>

                <div className="bg-white rounded-lg dark:bg-[#0a192f] shadow-sm dark:border dark:border-gray-700 shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                    <span className="text-4xl md:text-5xl font-bold">12+</span>
                    <span className="text-xs mt-2 text-gray-500 uppercase tracking-wide">
                        Personal Projects
                    </span>
                </div>

                <div className="bg-white rounded-lg dark:bg-[#0a192f] shadow-sm dark:border dark:border-gray-700 shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                    <span className="text-4xl md:text-5xl font-bold">1000+</span>
                    <span className="text-xs mt-2 text-gray-500 uppercase tracking-wide">
                        GitHub Contributions
                    </span>
                </div>

                <div className="bg-white rounded-lg dark:bg-[#0a192f] shadow-sm dark:border dark:border-gray-700 shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                    <span className="text-4xl md:text-5xl font-bold">100%</span>
                    <span className="text-xs mt-2 text-gray-500 uppercase tracking-wide">
                        Commitment
                    </span>
                </div>

            </div>

        </div >
    )
}

export default Hero