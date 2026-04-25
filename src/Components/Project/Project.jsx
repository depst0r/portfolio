import Test from '../../Images/Rectangle 22.jpg'
import './Project.scss'

 const Project = () => {
    return (
        <div className="project">
            <div className="project__wrapper">
                <div className="project__header">
                <div className="project__title">
                    <span className="hash-symbol">#</span>
                    <span className="title-h4">projects</span>
                    <div className="project__title-line"></div>
                    </div>
                    <div className="project__link">
                        <a href="#" className='link'>View all {`~~>`}</a>
                        </div>
                </div>
                <div className="project__cards">
                    <div className="project__card">
                        <div className="card__images"><img src={Test} alt="Test" /></div>
                        <div className="card__lang">HTML SCSS REACT</div>
                        <div className="card__info">
                            <div className="card__title">ChertNodes</div>
                            <div className="card__sub">Minecraft servers hosting </div>
                            <div className="card__buttons">
                                <button type='button'>{`Live <~>`}</button>
                                <button type='button'>{`Cached >`}</button>
                                </div>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card__images"><img src={Test} alt="Test" /></div>
                        <div className="card__lang">HTML SCSS REACT</div>
                        <div className="card__info">
                            <div className="card__title">ChertNodes</div>
                            <div className="card__sub">Minecraft servers hosting </div>
                            <div className="card__buttons">
                                <button type='button'>{`Live <~>`}</button>
                                <button type='button'>{`Cached >`}</button>
                                </div>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card__images"><img src={Test} alt="Test" /></div>
                        <div className="card__lang">HTML SCSS REACT</div>
                        <div className="card__info">
                            <div className="card__title">ChertNodes</div>
                            <div className="card__sub">Minecraft servers hosting </div>
                            <div className="card__buttons">
                                <button type='button'>{`Live <~>`}</button>
                                <button type='button'>{`Cached >`}</button>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project