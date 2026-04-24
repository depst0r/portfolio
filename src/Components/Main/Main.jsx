
import './Main.scss'
import User from '../../Images/Main/user.png';
import UserLg from '../../Images/Main/Lg/user.png'
import Dots from '../../Images/Figure/Dots.png';
import Logo from '../../Images/Figure/Logo.png';

import Form from '../Form/Form.jsx';

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__titles">
                    <h1 className="main__title">Sergei Panteleenko - </h1>
                    <h3 className="main__title">frontend developer</h3>
                    <div className="main__subtitle">
                        <span className="sub">
                            He crafts responsive websites
                            where
                            technologies
                            meet creativity
                        </span>
                    </div>
                    <button type="button" className='open-form'>Contact me !!</button>
                </div>
                <div className="main__images">
                    <img src={Dots} alt="User" className="main__images-dots" />
                    {/* <img src={User} alt="User" className="main__images-user" /> */}
                        <picture>
                        <source 
                            media="(min-width: 768px)" 
                            srcSet={UserLg}  
                        />
                        <img 
                            src={User}  
                            alt="user" 
                            className="main__images-user"
                        />
                        </picture>
                    <img src={Logo} alt="User" className="main__images-figure" />
                <div className="main__info">
                    <div className="main__info-wrap">
                        <div className="main__info-square"></div>
                        <div className="main__info-text">
                            <span className="sub">Currently working on </span>
                            <span className='text'>Portfolio</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                <div className="main__quotation">
                    <div className="quotion__col">
                        <span className="main__quotation-text">
                            With great power comes great electricity bill
                    </span>
                    </div>
                    <div className="quotion__col">
                        <span className="main__quotation-text">
                        - Dr. Who
                    </span>
                    </div>
                </div>
        </main>
    )
}

export default Main