
import './Skils.scss'
import user from '../../Images/Skils/user.png'

import Window from '../../Sass/UI/Window/Window.jsx'

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
                    <Window className='window__skils'>
                            <div className='window-code'>&gt; $ npm start</div>
                            <div className='window-code'>&gt; compiling...</div>
                            <div className='window-code'>&gt; skils</div>
                    </Window>    
                </div> : null
            }
                <div className="skils__col">
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Languages</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>JavaScript</span>
                            <span className='title-h6-small'>/</span>
                            <span className='title-h6-small'>TypeScript</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Languages</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>JavaScript</span>
                            <span className='title-h6-small'>/</span>
                            <span className='title-h6-small'>TypeScript</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Languages</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>JavaScript</span>
                            <span className='title-h6-small'>/</span>
                            <span className='title-h6-small'>TypeScript</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Languages</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>JavaScript</span>
                            <span className='title-h6-small'>/</span>
                            <span className='title-h6-small'>TypeScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}