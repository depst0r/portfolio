import { Link } from 'react-router-dom';


export const HeaderDesktop = () => {
    return (
        <nav className="header__navigation">
            <ul className="header__menu">
                <Link to='/'>
                    <li className="header__links">
                        <span className="header__link"><span className="hash">#</span>Home</span>
                    </li>
                </Link>
                <Link to='works'>
                                <li className="header__links">
                    <span  className="header__link"><span className="hash">#</span>Works</span>
                    </li>
                </Link>

                <li className="header__links">
                    <span  className="header__link"><span className="hash">#</span>About-me</span>
                    </li>
                <li className="header__links">
                    <span  className="header__link"><span className="hash">#</span>Contacts</span>
            </li>
        </ul>
            </nav>
    )
}
