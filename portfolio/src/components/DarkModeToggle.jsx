import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const [open, setOpen] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark"
        }
        return false
    })

    useEffect(() => {
        if (open) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [open])

    return (
        <div
            onClick={() => setOpen(!open)}
            className={`w-13 h-7 rounded-full flex items-center p-1 cursor-pointer transition-colors duration-300 ${open ? 'bg-[#64ffda]' : 'bg-[#D1D5DC]'
                }`}
        >
            <div
                className={`h-5 w-5 bg-white rounded-full transform transition-transform duration-300 ${open ? 'translate-x-6' : 'translate-x-0'
                    }`}
            ></div>
        </div>
    )
}

export default DarkModeToggle