import { AnimatePresence, motion } from "motion/react";

import './Form.scss';

export const Form = ({isOpen}) => {

    console.log(isOpen)

    return (
        <AnimatePresence>
            { isOpen && (

                <motion.div 
                className="form-bg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                >
                    <div className="form__buttons">
                        <button className="button_close"></button>
                        <button className="button_close"></button>
                        <button className="button_close"></button>
                        </div>
                    <form action="#" method="post" className='form'>
                        <input type="text" name="name" className='form__name'  placeholder='Name'/>
                        <input type="email" name="email" className='form__email'  placeholder='Email'/>
                        <input type="text" name="title" className='form__title' placeholder='Title' />
                        <textarea name="text" className='form__text' placeholder='Message'></textarea>
                        <button type="submit" className='form__submit'>Send</button>
                    </form>
                </motion.div>
            ) 
            }
        </AnimatePresence>

    )
}
