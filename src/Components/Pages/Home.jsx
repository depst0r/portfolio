import {Main} from '../Main/Main.jsx'
import {Social} from '../Social/Social.jsx';
import {Project} from '../Project/Project.jsx';
import {AboutMe} from '../AboutMe/AboutMe.jsx';
import {Skils}  from '../Skils/Skils.jsx';
import { Contacts } from '../Contacts/Contacts.jsx';

export const HomePage = ({isMobile})=> {
    return (
        <>
            <Main/>
            <Social isMobile={isMobile}/>
            <Project/>
            <Skils isMobile={isMobile}/>
            <AboutMe isMobile={isMobile}/>
            <Contacts/>
        </>
    )
}