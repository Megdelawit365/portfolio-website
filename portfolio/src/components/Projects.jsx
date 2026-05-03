import React from 'react'

const Projects = () => {
    return (
        <div className='min-h-[200vh] md:w-[80%] md:ml-[13%] m-auto pt-20 flex flex-col '>
            <div className='flex flex-row justify-between items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-4xl whitespace-nowrap'>My Projects</h1>
                <hr className='border flex-1' />
            </div>
            <div className="grid grid-rows-2 gap-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col bg-[rgba(0,0,0,0.05)] pb-4 border rounded-lg'>
                        <img src="/notes2.png" className='h-64 w-full rounded-t-lg' alt="" />
                        <h1 className='text-[1.5rem] font-bold py-2 px-4'>NOTES APP</h1>
                        <div className="flex flex-wrap gap-2 px-4 pb-2">
                            <span className="text-sm px-2 py-1 border rounded-md">React</span>
                            <span className="text-sm px-2 py-1 border rounded-md">Node</span>
                            <span className="text-sm px-2 py-1 border rounded-md">Express</span>
                            <span className="text-sm px-2 py-1 border rounded-md">MongoDB</span>
                        </div>
                        <p className='px-4 pb-4 text-lg text-gray-500'>MERN Notes App that allows users to create,
                            edit, and delete notes with a clean and intuitive interface
                        </p>
                        <div className="flex flex-row px-4 gap-3">
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/github2.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://github.com/Megdelawit365/mern-notes-app" className='text-[1.2rem]'>Github</a>
                            </button>
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/link.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://mern-notes-app-frontend-af03.onrender.com/" className='text-[1.2rem]'>Site</a>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[rgba(0,0,0,0.05)] pb-4 border rounded-lg'>
                        <img src="/book.png" className='h-64 w-full rounded-t-lg' alt="" />
                        <h1 className='text-[1.5rem] font-bold py-2 px-4'>BOOK REVIEW APP</h1>
                        <div className="flex flex-wrap gap-2 px-4 pb-2">
                            <span className="text-sm px-2 py-1 border rounded-md">React</span>
                            <span className="text-sm px-2 py-1 border rounded-md">Node</span>
                            <span className="text-sm px-2 py-1 border rounded-md">Express</span>
                            <span className="text-sm px-2 py-1 border rounded-md">MongoDB</span>
                        </div>
                        <p className='px-4 pb-4 text-lg text-gray-500'>
                            Book Review App for browsing books, writing reviews and managing users'
                            entries through create, edit, and delete functionality.
                        </p>
                        <div className="flex flex-row px-4 gap-3">
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/github2.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://github.com/Megdelawit365/Book-review-app" className='text-[1.2rem]'>Github</a>
                            </button>
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/link.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://book-review-app-5.onrender.com/" className='text-[1.2rem]'>Site</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col bg-[rgba(0,0,0,0.05)] pb-4 border rounded-lg'>
                        <img src="/ecommerce.png" className='h-64 w-full rounded-t-lg' alt="" />
                        <h1 className='text-[1.5rem] font-bold py-2 px-4'>ECOMMERCE APP</h1>
                        <div className="flex flex-wrap gap-2 px-4 pb-2">
                            <span className="text-sm px-2 py-1 border rounded-md">Laravel</span>
                            <span className="text-sm px-2 py-1 border rounded-md">MySQL</span>
                        </div>
                        <p className='px-4 pb-4 text-lg text-gray-500'>A full-stack eCommerce
                            application built with Laravel that allows users to browse products,
                            manage a shopping cart, and complete orders
                        </p>
                        <div className="flex flex-row px-4 gap-3">
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/github2.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://github.com/Megdelawit365/Laravel-Ecommerce" className='text-[1.2rem]'>Github</a>
                            </button>
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/link.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <span className='text-[1.2rem]'>Site</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[rgba(0,0,0,0.05)] pb-4 border rounded-lg'>
                        <img src="/LMS.png" className='h-64 w-full rounded-t-lg' alt="" />
                        <h1 className='text-[1.5rem] font-bold py-2 px-4'>LIBRARY MANAGEMENT SYSTEM</h1>
                        <div className="flex flex-wrap gap-2 px-4 pb-2">
                            <span className="text-sm px-2 py-1 border rounded-md">Laravel</span>
                            <span className="text-sm px-2 py-1 border rounded-md">MySQL</span>

                        </div>
                        <p className='px-4 pb-4 text-lg text-gray-500'>
                            A full-stack Library Management System (LMS)
                            designed to manage books, users, and borrowing activities efficiently
                        </p>
                        <div className="flex flex-row px-4 gap-3">
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/github2.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <a href="https://github.com/Megdelawit365/Library-Book-Borrowing-System" className='text-[1.2rem]'>Github</a>
                            </button>
                            <button className='border-2 cursor-pointer hover:scale-[1.04] transition-all duration-200 rounded-lg bg-[var(--primary)] p-1 px-6 flex flex-row items-center justify-center gap-2'>
                                <img src="/link.png" className='h-[1.5rem] w-[1.5rem]' alt="" />
                                <span className='text-[1.2rem]'>Site</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
