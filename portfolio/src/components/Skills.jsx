import React from 'react'

const Skills = () => {
    return (
        <div className='min-h-screen mb-30 md:w-[80%] md:ml-[13%]  pt-20 flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-4xl whitespace-nowrap'>My Skill Set</h1>
                <hr className='border flex-1' />
            </div>
            <div className='w-full border p-4 px-8 pb-6'>
                <h1 className='text-xl mb-2'>Fullstack Web</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 auto-rows-[7rem] cursor-default">
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/html.png" alt="" />
                        <span>HTML</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/css.png" alt="" />
                        <span>CSS</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/react.png" alt="" />
                        <span>React</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/tailwind.png" alt="" />
                        <span>Tailwind CSS</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/javascript.png" alt="" />
                        <span>JavaScript</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/nodejs.png" alt="" />
                        <span>Node.js</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/express.png" alt="" />
                        <span>Express</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/laravel.png" alt="" />
                        <span>Laravel</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/mysql.png" alt="" />
                        <span>MySQL</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/mongodb.svg" alt="" />
                        <span>MongoDB</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2 text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/git.svg" alt="" />
                        <span>Git</span>
                    </div>
                </div>
            </div>

            <div className='w-full border p-4 px-8'>
                <h1 className='text-xl mb-2'>Languages</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(6rem,7rem))] gap-2 auto-rows-[7rem] cursor-default">
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2   text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/python.png" alt="" />
                        <span>Python</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2   text-center transition-all duration-300 hover:rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white  hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/cpp.png" alt="" />
                        <span>C++</span>
                    </div>
                    <div className='border flex flex-col justify-center items-center py-1 pt-2 px-2   text-center transition-all duration-300 hover:-rotate-3 hover:scale-[1.03] hover:bg-[var(--primary)] hover:text-white hover:ring-4 hover:ring-black'>
                        <img style={{ width: "3rem", height: "3rem" }} src="/javascript.png" alt="" />
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills
