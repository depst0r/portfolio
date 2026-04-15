
import Logo from '../../Images/Logo.png';
import './Header.scss'

const Header = () => {
    return (

    <header className='header'>
        <div className="header__body">
            <div className="header__columns">
            <div className="header__logo">
                <img src={Logo} alt="Logo" />
                <h6 className="header__logo-name">depstor</h6>
            </div>
            <ul className="header__menu">
                <li className="header__links">
                    <a href="#" className="header__link">#Home</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__link">#Works</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__link">#About-me</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__link">#Contacts</a>
                </li>
        </ul>
            </div>
</div>
    </header>

    )
}

export default Header