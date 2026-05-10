import React from 'react'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const VerticalIcons = () => {
    return (
        <div className='fixed hidden md:flex md:flex-col bottom-0 left-15 gap-9 justify-center items-center'>

            <a href="https://github.com/Megdelawit365" target="_blank" rel="noreferrer">
                <FiGithub className="text-gray-700 dark:text-[#ccd6f6]  dark:hover:text-[#64ffda]  hover:scale-[1.1] transition-all duration-200 cursor-pointer" size={22} />
            </a>

            <a href="https://leetcode.com/u/Megdelawit365/" target="_blank" rel="noreferrer">
                <SiLeetcode className="text-gray-700 dark:text-[#ccd6f6]  dark:hover:text-[#64ffda]  hover:scale-[1.1] transition-all duration-200 cursor-pointer" size={22} />
            </a>

            <a href="https://www.linkedin.com/in/megdelawit-aynalem-715156245/" target="_blank" rel="noreferrer">
                <FiLinkedin className="text-gray-700 dark:text-[#ccd6f6]  dark:hover:text-[#64ffda]  hover:scale-[1.1] transition-all duration-200 cursor-pointer" size={22} />
            </a>



            <a href="https://t.me/melody8853" target="_blank" rel="noreferrer">
                <FaTelegramPlane className="text-gray-700 dark:text-[#ccd6f6] dark:hover:text-[#64ffda] hover:scale-[1.1] transition-all duration-200 cursor-pointer" size={22} />
            </a>

            <div className='h-24 border-l-[0.1rem] border-gray-400'></div>
        </div>
    )
}

export default VerticalIcons