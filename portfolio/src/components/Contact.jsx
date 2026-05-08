import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import axios from "axios"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setStatus('')

        try {

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
                name,
                email,
                message
            })

            setStatus(res.data.message)

            setName('')
            setEmail('')
            setMessage('')

        } catch (err) {

            setStatus(
                err.response?.data?.error || "Failed to send message"
            )

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen pt-30 mb-30 md:px-36 text-gray-600 dark:text-[#ccd6f6] flex flex-col'>

            <div className='flex flex-row font-mono justify-start items-center mb-10 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-5xl font-[900] whitespace-nowrap'>
                    CONTACT
                </h1>
            </div>

            <div className='border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#0a192f]'>

                <div className='grid md:grid-cols-[4fr_3fr] border-b border-gray-200 dark:border-gray-700'>

                    <div className='p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col gap-6'>

                        <span className='font-mono text-xs tracking-[0.25rem] text-gray-400 dark:text-gray-500'>
                            GET IN TOUCH
                        </span>

                        <h1 className='text-4xl md:text-6xl font-black leading-[0.95] text-gray-800 dark:text-[#ccd6f6]'>
                            LET&apos;S CREATE SOMETHING
                        </h1>

                        <p className='text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 max-w-md'>
                            Open to internships, freelance opportunities,
                            collaborations, and software engineering discussions.
                        </p>

                    </div>

                    <form className='flex flex-col'>

                        <input
                            type="text"
                            placeholder="YOUR NAME"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='bg-transparent px-8 py-6 border-b border-gray-200 dark:border-gray-700 outline-none font-mono text-sm text-gray-700 dark:text-[#ccd6f6] placeholder:text-gray-400'
                        />

                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-transparent px-8 py-6 border-b border-gray-200 dark:border-gray-700 outline-none font-mono text-sm text-gray-700 dark:text-[#ccd6f6] placeholder:text-gray-400'
                        />

                        <textarea
                            rows={7}
                            placeholder="YOUR MESSAGE"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='bg-transparent px-8 py-6 outline-none resize-none font-mono text-sm text-gray-700 dark:text-[#ccd6f6] placeholder:text-gray-400'
                        />

                    </form>

                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 md:px-12 py-6'>

                    <div className='flex flex-col gap-2 font-mono text-sm text-gray-500 dark:text-gray-400'>
                        <span>
                            megdelawitaynalem365@gmail.com
                        </span>

                        <span>
                            Addis Ababa · Ethiopia
                        </span>
                    </div>

                    <div className='flex flex-col items-start md:items-end gap-3'>

                        {status && (
                            <span className='text-sm px-4 py-2 dark:bg-[#112240] text-gray-700 dark:text-[#64ffda]  dark:border-gray-700 font-mono'>
                                {status}
                            </span>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className='group flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800 dark:bg-[#64ffda] text-white dark:text-[#0a192f] font-semibold hover:scale-[1.03] transition duration-300 disabled:opacity-70'
                        >
                            {loading ? "SENDING..." : "SEND MESSAGE"}

                            <FiArrowUpRight className='group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300' />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact