import { useState, useEffect } from 'react';
import Header  from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Form from './Components/Form/Form.jsx';
import Social from './Components/Social/Social.jsx';
import Project from './Components/Project/Project.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import './App.scss'

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

      useEffect(() => {
        const headleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobile(false)
            } else {
                setIsMobile(true)
            }  
        }

        window.addEventListener('resize', headleResize)
        return () => window.removeEventListener('resize', headleResize)
    }, [])

  return (
    <div className='container'>
      <Header isMobile={isMobile} />
      <Main/>
      <Social isMobile={isMobile}/>
      <Project/>
      <AboutMe isMobile={isMobile}/>
    </div>
  )
}

export default App
