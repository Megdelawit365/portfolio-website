import { useRef, useState, useEffect } from 'react'
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
import Loader from './components/Loader'
import Menu from './components/Menu'
import VerticalEmail from './components/VerticalEmail'
import Experience from './components/Experience'
import Footer from './components/Footer'



function App() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const xRef = useRef(null)

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setFadeOut(true);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {loading && <Loader progress={progress} fadeOut={fadeOut} />}

      {!loading && (
        <div className="font-[Outfit]  dark:bg-[#0a192f]   bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(#2a2a2a_1px,transparent_1px),linear-gradient(to_right,#2a2a2a_1px,transparent_1px)] bg-[size:40px_40px]  p-5 md:pt-0 px-7 md:px-0 pb-0 ">

          <VerticalIcons />
          <NavBar refs={{ heroRef, skillsRef, projectsRef, contactRef, xRef }} />
          <Menu refs={{ heroRef, skillsRef, projectsRef, contactRef, xRef }} />
          <VerticalEmail />
          <div ref={heroRef}><Hero /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={xRef}><Experience /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={contactRef}><Contact /></div>
          <Footer />

        </div>
      )}
    </>
  );
}


export default App
