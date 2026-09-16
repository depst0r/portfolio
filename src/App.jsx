import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Header}  from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { HomePage, About, Contacts, RepoPage  } from './Components/Pages/index.js';

import Spiner from './Components/Spiner/Spiner.jsx';

import './App.scss'

const Works = lazy(() => import('./Components/Pages/Works.jsx')
  .then(component => ({
    default: component.Works
  })
))

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
      <div className='container'>
        <Header isMobile={isMobile} />
          <Suspense fallback={<Spiner/>}>
            <Routes>
              <Route path='/' element={ <HomePage isMobile={isMobile}/>} />
              <Route path='/works' element={<Works/>} />
              <Route path='/works/:repoId' element={<RepoPage/>} />
              <Route path='/about-me' element={<About isMobile={isMobile}/>}/>
              <Route path='/contact' element={<Contacts/>}/>
            </Routes>
            </Suspense>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
