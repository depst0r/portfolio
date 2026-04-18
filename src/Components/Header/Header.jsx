import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import HeaderDesktop from '../Header/HeaderDesktop.jsx';
import HeaderMobile from '../Header/HeaderMobile.jsx';
import Logo from '../../Images/Logo.png';
import './Header.scss';

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const togglleMenu = () => setIsMenuOpen(!isMenuOpen) 

    useEffect(() => {
        const headleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', headleResize)
        return () => window.removeEventListener('resize', headleResize)
    }, [])

    return (
    <header className='header'>
        <div className="header__body">
            <div className="header__columns">
            <div className="header__logo">
            <div className="header__logo-col">
                <img src={Logo} alt="Logo" />
                <h6 className="header__logo-name">depstor</h6>
            </div>
            {/* <div className="header__logo-col"></div> */}
                {isMobile ?  
                <button type="button" className='gamburger' onClick={togglleMenu}>
                    <div className="gamburger__lines">
                        <motion.span 
                            animate={{rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 9 : 0}}
                        className="gamburger__line" />
                        <motion.span 
                            animate={{rotate: isMenuOpen ? 45 : 0, opacity: isMenuOpen ? 0 : 1}}
                        className="gamburger__line" />
                    </div>
                </button> : null}
            </div>
            { !isMobile ? <HeaderDesktop/> : <HeaderMobile/> }
            </div>
    </div>
    </header>
    )
}

export default Header