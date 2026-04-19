
import './Main.scss'
import User from '../../Images/Main/user.png';

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
            <img src={User} alt="User" className="main__images-user" />
        </div>
            </div>
        </main>
    )
}

export default Main