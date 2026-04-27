import './Card.scss';

const Card = ({repo}) => {

    return (
    <div className="project__card">
        <div className="card__images">
            <img src='#' alt="Test" /></div>
        <div className="card__lang">
            <span className="title-h6">HTML</span>
            <span className="title-h6">SCSS</span>
            <span className="title-h6">REACT</span>
        </div>
        <div className="card__info">
            <div className="card__title">{repo.name}</div>
            <div className="card__sub title-h6">Minecraft servers hosting </div>
            <div className="card__buttons">
                <button type='button'>{`Live <~>`}</button>
                <button type='button'>{`Github ⏎`}</button>
                </div>
        </div>
    </div>
    )
}

export default Card