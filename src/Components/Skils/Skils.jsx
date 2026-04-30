
import './Skils.scss'
import user from '../../Images/Skils/user.png'

export const Skils = ({isMobile}) => {
    return (
        <div className="skils">
            <div className="skils__header">
                <div className="skils__title">
                    <span className="hash-symbol">#</span>
                    <span className="title-h4">skils</span>
                    <div className="line"></div>
                </div>
            </div>
            <div className="skils__container">
            {!isMobile ? 
                <div className="skils__col">
                    <img src={user} alt="user" />
                </div> : null
            }
                <div className="skils__col"></div>
            </div>
        </div>
    )
}