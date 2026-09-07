import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Header}  from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { HomePage, Works, About, Contacts } from './Components/Pages/index.js';

import './App.scss'
import { RepoPage } from './Components/Pages/RepoPage.jsx';

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
    <Router>
      <RepoPage/>
      <div className='container'>
        <Header isMobile={isMobile} />
          <Routes>
            <Route path='/' element={ <HomePage isMobile={isMobile}/>} />
            <Route path='/works' element={<Works/>} />
            <Route path='/about-me' element={<About isMobile={isMobile}/>}/>
            <Route path='/contact' element={<Contacts/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
