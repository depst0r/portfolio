
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
                            <span className='title-h6-small separator'>/</span>
                            <span className='title-h6-small'>TypeScript</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Other</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>HTML</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>CSS</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>SCSS</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>REST-API</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>BEM</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Figma</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Tools</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>Git</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Webpack</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Vite</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>ESLint</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Prettier</span>
                        </div>
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Frameworks</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>React</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>React-Router</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Redux-Toolkit</span>
                            <span className='title-h6-small separator'>•</span>
                            <span className='title-h6-small'>Tailwind CSS</span>
                        </div>
                        
                    </div>
                    <div className="col__group">
                        <div className="col__group-name">
                            <span className='title-h6-bold'>Learning</span>
                        </div>
                        <div className="col__group-exp">
                            <span className='title-h6-small'>Next.js</span>
                            <span className='title-h6-small separator'>→</span>
                            <span className='title-h6-small'>Framer Motion</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}