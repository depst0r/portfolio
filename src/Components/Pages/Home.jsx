import * as motion from "motion/react-client";
import { Main } from '../Main/Main.jsx';
import { Social } from '../Social/Social.jsx';
import { Project } from '../Project/Project.jsx';
import { AboutMe } from '../AboutMe/AboutMe.jsx';
import { Skils } from '../Skils/Skils.jsx';
import { Contacts } from '../Contacts/Contacts.jsx';

export const HomePage = ({ isMobile }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <Main />
            </motion.div>
            
                <Social isMobile={isMobile} />
            

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Project />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Skils isMobile={isMobile} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <AboutMe isMobile={isMobile} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Contacts />
            </motion.div>
        </>
    );
};