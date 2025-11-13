import { gsap } from 'gsap';
import { initAllAnimations } from '/src/js/animations/index.js';
import '/src/sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const lines = [
        document.getElementById('line1'),
        document.getElementById('line2'),
    ];

    if (!hamburger || !mobileMenu) {
        console.error('Menu elements not found!');
        return;
    }

    let isOpen = false;

    hamburger.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            mobileMenu.classList.remove('scale-y-0');
            mobileMenu.classList.add('scale-y-100');
        } else {
            mobileMenu.classList.remove('scale-y-100');
            mobileMenu.classList.add('scale-y-0');
        }
        if (lines[0]) {
            lines[0].style.transform = isOpen ?
                'rotate(45deg) translate(5px, 5px)' :
                'rotate(0) translate(0, 0)';
        }

        if (lines[1]) {
            lines[1].style.opacity = isOpen ? '0' : '1';
        }
    });



    //Animations
    initAllAnimations();
});