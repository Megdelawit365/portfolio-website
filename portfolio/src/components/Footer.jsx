import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white  font-mono text-center p-8 w-full text-sm dark:bg-[#0a192f] text-gray-600 dark:text-[#ccd6f6]'>
            &copy; {new Date().getFullYear()} MEGDELAWIT AYNALEM. ALL RIGHTS REESERVED.
        </div>
    )
}

export default Footer
