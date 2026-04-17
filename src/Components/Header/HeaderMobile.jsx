const HeaderMobile = () => {
    return (
        <div className="header__wrapper">
        <nav className="header__navigation-mobile">
            <ul className="header__navigation-menu">
                <li className="header__navigation-links">
                    <a href="#" className="header__navigation-link"><span className="simbol">#</span>Home</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__navigation-link"><span className="simbol">#</span>Works</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__navigation-link"><span className="simbol">#</span>About-me</a>
                    </li>
                <li className="header__links">
                    <a href="#" className="header__navigation-link"><span className="simbol">#</span>Contacts</a>
            </li>
        </ul>
        </nav>
        <button type="button">
            <div className="gamburger">
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </button>
        </div>

    )
}

export default HeaderMobile;