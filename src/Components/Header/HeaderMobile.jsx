import {motion, AnimatePresence} from 'framer-motion';
import {SocialLinks}from '../../Contacts/SocialLinks.js'

export const HeaderMobile = ({isMenuOpen, setIsMenuOpen}) => {

const {github, linkedIn, tg} = SocialLinks

console.log('Mobile',isMenuOpen)

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div className="header__wrapper"
                    initial={{x: '100%'}}
                    animate={{x: 0}}
                    exit={{x: '100%'}}
                >
                    <nav className="header__navigation-mobile">
                        <ul className="header__navigation-menu">
                            <li className="header__navigation-links">
                                <a href="#" className="header__navigation-link" onClick={() => setIsMenuOpen(false)}><span className="hash">#</span>Home</a>
                                </li>
                            <li className="header__links">
                                <a href="#" className="header__navigation-link" onClick={() => setIsMenuOpen(false)}><span className="hash">#</span>Works</a>
                                </li>
                            <li className="header__links">
                                <a href="#" className="header__navigation-link" onClick={() => setIsMenuOpen(false)}><span className="hash">#</span>About-me</a>
                                </li>
                            <li className="header__links">
                                <a href="#" className="header__navigation-link" onClick={() => setIsMenuOpen(false)}><span className="hash">#</span>Contacts</a>
                        </li>
                        <li>
                    <div className="header__links-socials">
                        <a className="icon__link" href={github} target="blank" className="header__navigation-link">
                            <svg className="icon" fill="currentColor" viewBox="0 0 50 50" width="100" height="100">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                            <a className="icon__link" href={linkedIn} target="blank" className="header__navigation-link">
                                <svg className="icon" fill="currentColor" viewBox="0 0 50 50" width="100" height="100">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                                </a>
                     <a className="social__link" href={tg} target="blank">
                        <svg width="23" height="23" viewBox="0 0 50 50" fill="currentColor" width="100" height="100">
                            <path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.9126 8.48987C10.7942 8.95563 8.55744 9.91875 5.20519 11.3792C4.66181 11.5949 4.37575 11.8076 4.34987 12.0146C4.30675 12.3639 4.74519 12.5019 5.34175 12.6903L5.59331 12.7693C6.17981 12.9605 6.97044 13.1833 7.38012 13.1919C7.75387 13.2006 8.16931 13.0482 8.62787 12.7319C11.7602 10.6174 13.3774 9.54931 13.478 9.52631C13.5499 9.50906 13.6505 9.48894 13.7166 9.54931C13.7842 9.60825 13.777 9.72181 13.7698 9.752C13.7267 9.93744 12.006 11.5359 11.1162 12.3639C10.8387 12.6227 10.6418 12.8053 10.6016 12.8469C10.5129 12.9375 10.4228 13.0267 10.3313 13.1143C9.78506 13.6404 9.37681 14.0343 10.3529 14.6783C10.8229 14.9888 11.1996 15.2432 11.5747 15.4991C11.983 15.778 12.3912 16.0554 12.9202 16.4033C13.0539 16.4896 13.1833 16.583 13.3084 16.6721C13.7842 17.0114 14.214 17.3161 14.7416 17.2673C15.0492 17.2385 15.3669 16.951 15.5279 16.0885C15.9088 14.0516 16.6578 9.63988 16.8302 7.82144C16.8408 7.67027 16.8345 7.51841 16.8116 7.36862C16.798 7.24776 16.7395 7.13641 16.6477 7.05669C16.5169 6.9664 16.361 6.91962 16.2021 6.923C15.7708 6.93019 15.1052 7.16163 11.9126 8.48987Z" fill="#ABB2BF" />
                            </svg>
                    </a>
                                    </div>
                        </li>
                    </ul>
                    </nav>
                </motion.div>
    )}
        </AnimatePresence>
    )
}
