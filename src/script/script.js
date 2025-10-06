import '/src/style/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    const gamburger = document.querySelector('.header__menu-gamburger'),
        headerNavSm = document.querySelector('.header__nav-sm'),
        overlay = document.querySelector('.form__modal-overlay'),
        closeBtnForm = document.querySelector('.form__close-btn'),
        btnContact = document.querySelector('.btn-contact');

    const elemToggle = (el, selector) => {
        el.classList.toggle(selector)
    }

    const hideShowMenu = elem => {
        elem.addEventListener('click', () => {
            elemToggle(gamburger, 'header__menu-gamburger--active')
            elemToggle(headerNavSm, 'header__nav-sm--visible')
        })
    }

    btnContact.addEventListener('click', () => {
        overlay.classList.add('form__modal-overlay--active')
        document.body.classList.add('modal-open');

    })

    closeBtnForm.addEventListener('click', () => {
        overlay.classList.remove('form__modal-overlay--active')
        document.body.classList.remove('modal-open');
    })


    hideShowMenu(gamburger)

})






