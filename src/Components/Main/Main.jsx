
import './Main.scss'
import User from '../../Images/Main/user.png';
import Dots from '../../Images/Figure/Dots.png';
import Logo from '../../Images/Figure/Logo.png';

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
                </div>
            <div className="main__images">
                <img src={Dots} alt="User" className="main__images-dots" />
                <img src={User} alt="User" className="main__images-user" />
                <img src={Logo} alt="User" className="main__images-figure" />
            </div>
            <div className="main__info">
                <div className="main__info-wrap"></div>
            </div>
            </div>
        </main>
    )
}

export default Main