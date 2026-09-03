
import './TitlePage.scss'

export const TitlePage = ({title, subtitle} )=>  {

    return (
        <div className="title">
            <div className="title__col">
                <span className="hash-symbol">/</span>
                <h2 className='title-h2'>{title}</h2>
            </div>
            <div className="title__col">
                <div className="title__sub">
                    <h3 className='subtitle'>{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}