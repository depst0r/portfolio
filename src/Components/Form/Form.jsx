import './Form.scss';

export const Form = () => {
    return (
        <div className="form-bg">
            <form action="#" method="post" className='form'>
                <input type="text" name="name" className='form__name'  placeholder='Name'/>
                <input type="email" name="email" className='form__email'  placeholder='Email'/>
                <input type="text" name="title" className='form__title' placeholder='Title' />
                <textarea name="text" className='form__text' placeholder='Message'></textarea>
                <button type="submit" className='form__submit'>Send</button>
            </form>
        </div>
    )
}
