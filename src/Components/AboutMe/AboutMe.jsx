import './AboutMe.scss'

import User from '../../Images/About/user.png'
import Window from '../../Sass/UI/Window/Window.jsx'

export const AboutMe = ({isMobile}) => {
    return (
        <div className="about">
            <div className="about__header">
                <div className="about__title">
                    <span className="hash-symbol">#</span>
                    <span class="title-h4">about-me</span>
                    <div className="line"></div>
                </div>
                <div className="about__link">
                    <a href="#" class="link">{'View all ~~>'}</a>
                </div>
            </div>
            <div className="about__container">
                <div className="about__info">
                    <p className="title-h5">Hi, I'm Sergey — frontend developer with a focus on clean code and user experience.</p>
                    <p className="title-h5">
                        Based in Belarus, I build responsive, 
                        production-ready websites using React, JavaScript, 
                        and modern CSS. Over the past two years, 
                        I've turned designs into functional interfaces that solve real business problems.
                    </p>
                    <p className="title-h5">
                        What sets me apart: I take ownership. At 35, 
                        I bring discipline, communication skills, 
                        and a track record of finishing what I start. \
                        I'm not looking for hand-holding — I'm looking for interesting challenges.
                    </p>
                    <p className="title-h5">
                        I keep my skills sharp with TypeScript, 
                        Framer Motion, and Next.js on the horizon. 
                        Open to full-time or contract work.
                    </p>
                </div>
                {!isMobile && 
                    <div className="about__person">
                        <Window className='window__about'>
                            <div className='window-code'>&gt; $ npm start</div>
                            <div className='window-code'>&gt; compiling...</div>
                            <div className='window-code'>&gt; about-me</div>
                        </Window>     
                    <img src={User} alt="user" />
                </div>
                }
                
            </div>
        </div>
    )
}
