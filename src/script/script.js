import '/src/style/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    const gamburger = document.querySelector('.header__menu-gamburger'),
        headerNavSm = document.querySelector('.header__nav-sm')


    const elemToggle = (el, selector) => {
        el.classList.toggle(selector)
    }

    const hideShowMenu = elem => {
        elem.addEventListener('click', () => {
            elemToggle(gamburger, 'header__menu-gamburger--active')
            elemToggle(headerNavSm, 'header__nav-sm--visible')
        })
    }



    hideShowMenu(gamburger)


})






