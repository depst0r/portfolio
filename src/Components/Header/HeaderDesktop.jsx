import { NavLink } from 'react-router-dom';


export const HeaderDesktop = () => {
    return (
        <nav className="header__navigation">
            <ul className="header__menu">
                    <li className="header__links">
                        <NavLink  
                            className="header__link"
                            end
                            style={({isActive}) => ({color: isActive ? '#fff' : '#abb2bf'})}
                            to='/'
                        >
                            <span className="hash">#</span>
                                Home
                            </NavLink>
                    </li>
                
                    <li className="header__links">
                    <NavLink 
                        className="header__link"
                        end
                        to='works'
                        style={({isActive}) => ({color: isActive ? '#fff' : '#abb2bf'})}
                    >
                        <span className="hash">#</span>Works
                    </NavLink>
                    </li>
                
                <li className="header__links">
                    <NavLink
                    end
                    to='about-me'
                    style={({isActive}) => ({color: isActive ? '#fff' : '#abb2bf'})}
                    className="header__link">
                        <span className="hash">#</span>About-me</NavLink>
                    </li>
                <li className="header__links">
                    <span  className="header__link"><span className="hash">#</span>Contacts</span>
            </li>
        </ul>
            </nav>
    )
}
