import './Form.scss';

export const Form = () => {
    return (
        <form action="#" method="post" className='form'>
            <input type="text" name="name" className='form__name' />
            <input type="email" name="email" className='form__email' />
            <input type="text" name="title" className='form__title' />
            <textarea name="text" className='form__text'></textarea>
            <button type="submit" className='form__submit'></button>
        </form>
    )
}
