import './Footer.scss'

import logo from '../../Images/Logo.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="foter__columns">
                    <div className="footer__column">
                        <div className="footer__logo">
                            <img src={logo} alt="logo" />
                            <h6 class="footer__logo-name">depstor</h6>
                            <span className="title-h5">depstor.work@gmail.com</span>
                        </div>
                        <span className='title-h5'>Web front-end developer</span>
                    </div>
                    <div className="footer__column"></div>
                    <div className="footer__column"></div>
                </div>
            </div>
        </footer>
    )
}