import * as motion from "motion/react-client";

import { Social } from '../Social/Social.jsx';
import { Contacts as Contact } from '../Contacts/Contacts.jsx';


export const Contacts = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >             
            <Social/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >

                <Contact/>
            </motion.div>
        </>
    )
}