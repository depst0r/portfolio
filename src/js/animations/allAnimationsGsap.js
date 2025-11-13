import { gsap } from 'gsap';

export function initHeroAnimations() {
    const tl = gsap.timeline();

    tl
        .from('.name-anim', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.title-anim', {
            duration: 0.8,
            x: -50,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .from('.desc-anim', {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3');

    return tl;
};

export function initMenuAnimations() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.2,
                color: '#00ff00',
                textShadow: '0 0 10px #00ff00',
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                color: '#abb2bf',
                textShadow: 'none',
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}