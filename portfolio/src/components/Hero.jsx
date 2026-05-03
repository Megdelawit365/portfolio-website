import React from 'react'

const Hero = ({ refs }) => {
    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    return (
        <div id='hero' className='md:text-center h-[100vh] flex flex-col justify-center items-center  md:w-[65%] m-auto'>
            <div className='flex flex-col '>
                <span className='text-[1.5rem] font-semibold text-gray-600'>HI<span className='text-3xl'>👋</span> I'M</span>
                <span className='text-[1.7rem] md:text-[3.6rem] font-bold'>MEGDELAWIT AYNALEM</span>
                <span className='text-gray-600 mt-2 text-justify md:text-center'>I'm a Software Engineering student and a full-stack
                    developer. I enjoy working across both frontend and backend, and I’m currently sharpening
                    my skills in data structures and algorithms to improve my problem-solving skills.
                </span>
                <div className="flex flex-col md:flex-row justify-between md:justify-center items-center md:gap-7 gap-4 mt-6">
                    <a href="/Megdelawit_Aynalem_Resume1.pdf" className='w-full md:w-50' download>
                        <button className='border-[0.1rem] border-black transition-all duration-300 cursor-pointer p-3 bg-black text-white hover:bg-[var(--primary)] rounded-lg w-full'>
                            Download Resume
                        </button>
                    </a>
                    <button onClick={() => scrollTo(refs.contactRef)} className='border-[0.1rem] border-gray-400 hover:border-[var(--primary)] transition-all duration-200 cursor-pointer p-3 rounded-lg w-full md:w-50'>Get in Touch</button>
                </div>

            </div>


        </div>
    )
}

export default Hero
