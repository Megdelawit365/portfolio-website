import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import HorizontalIcons from './HorizontalIcons'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setSuccess(true)
                setLoading(false)
                formRef.current.reset()
            })
            .catch(() => {
                setSuccess(false)
                setLoading(false)
            })
    }

    return (
        <div className='mb-30 md:w-[80%] md:ml-[13%] pt-20 flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-center mb-8 gap-4 md:gap-8'>
                <h1 className='text-[1.7rem] md:text-4xl whitespace-nowrap'>Contact Me</h1>
                <hr className='border flex-1' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className='md:text-[2.2rem] text-[1.2rem] flex flex-col justify-center font-extralight'>
                    Let’s build something cool ✨
                    Drop a message and I’ll get back to you as soon as possible.
                </div>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col bg-[rgba(0,0,0,0.05)] border rounded-lg p-6 gap-4"
                >
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Your Email"
                        className="border rounded-md p-2 outline-none focus:ring-1"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Write your message..."
                        rows={5}
                        className="border rounded-md p-2 outline-none focus:ring-1 resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="border-3 border-black cursor-pointer hover:scale-[1.01] hover:bg-[var(--primary)] transition-all duration-200 rounded-lg bg-black text-white p-2"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                    )}
                </form>

            </div>
            <HorizontalIcons />
        </div >
    )
}

export default Contact