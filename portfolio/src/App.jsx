import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Moon } from 'lucide-react'
import VerticalIcons from './components/VerticalIcons'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  return (

    <div className='font-[Outfit] p-5 px-7 md:px-20 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[size:30px_30px]' >
      <VerticalIcons />
      <NavBar
        refs={{ heroRef, skillsRef, projectsRef, contactRef }}
      />

      <div ref={heroRef}>
        <Hero refs={{ contactRef }} />
      </div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>

      <footer className="flex py-8 flex-col text-gray-500 md:flex-row md:ml-[13%] md:w-[80%]   justify-between items-center">
        <span className='text-gray-500'>Made with ❤️ &copy; {new Date().getFullYear()} Megdelawit Aynalem</span>
        <div className=''>Updated: May 3, 2026</div>
      </footer>


    </div >

  )
}


export default App
