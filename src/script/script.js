import '/src/style/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    const gamburger = document.querySelector('.header__menu-gamburger')

    gamburger.addEventListener('click', e => {
        gamburger.classList.toggle('header__menu-gamburger--active')
    })
})






