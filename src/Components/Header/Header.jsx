import { useState, useEffect } from 'react';
import HeaderDesktop from '../Header/HeaderDesktop.jsx';
import HeaderMobile from '../Header/HeaderMobile.jsx';
import Logo from '../../Images/Logo.png';
import './Header.scss';

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // useEffect(() => {
    //     const headleResize = () => {
    //         if (isMobile) 
    //     }
    // }, [])

    return (
    <header className='header'>
        <div className="header__body">
            <div className="header__columns">
            <div className="header__logo">
                <img src={Logo} alt="Logo" />
                <h6 className="header__logo-name">depstor</h6>
            </div>
            { !isMobile ? <HeaderDesktop/> : <HeaderMobile/> }
            </div>
    </div>
    </header>
    )
}

export default Header