import React, { useEffect, useState, useRef } from 'react';
import './Nav.scss';
import { gsap } from 'gsap';

const Nav = () => {

    const [toggle, setToggle] = useState(false);
    const menuButtonRef = useRef(null);
    const navMainRef = useRef(null);
    useEffect(() => {
        // Sélectionnez tous les liens avec la classe "link"
        const navLinks = document.querySelectorAll('#nav-main a');

        // Parcourez chaque lien
        navLinks.forEach(link => {
            // Ajoutez un gestionnaire d'événement au clic
            link.addEventListener('click', event => {
                event.preventDefault(); // Empêche le comportement de lien par défaut
                setToggle(false);
                const targetId = link.getAttribute('href'); // Récupérez l'attribut href (ancre)
                const targetElement = document.querySelector(targetId); // Sélectionnez l'élément cible

                if (targetElement) {
                    // Faites défiler jusqu'à l'élément cible
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth' // Faites défiler en douceur
                        });
                    }, 1500);
                }
            });
        });
    }, [])


    // Gère le clic sur le bouton de menu
    const handleOnClick = () => {
        setToggle(prevToggle => !prevToggle);
    };

    // Animation lorsque la souris entre dans le bouton de menu
    const handleMouseEnter = () => {
        gsap.to(menuButtonRef.current, { scale: 1.2, duration: 0.3, ease: 'power1.out' });
    };

    // Animation lorsque la souris quitte le bouton de menu
    const handleMouseLeave = () => {
        gsap.to(menuButtonRef.current, { scale: 1, duration: 0.3, ease: 'power1.out' });
    };

    useEffect(() => {
        // Initialise la position des liens
        gsap.set('.link', { y: 30 });

        // Crée l'animation pour le menu ouvert
        const menuAnimation = gsap.timeline({ paused: true });

        // Crée l'animation pour le menu fermé (reversed)
        const menuAnimationBack = gsap.timeline({ paused: true, reversed: true });

        // Récupère la référence à l'élément nav
        const navMain = navMainRef.current;

        if (toggle) {
            // Animation lorsque le menu est ouvert
            gsap.to(menuButtonRef.current, { rotation: 360, duration: 0.3, ease: 'power2.out' });
            menuAnimation
                .to(navMain, { duration: 0.5, opacity: 1, width: '100%', clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power2.inOut", x: 0, y: 0, z: 0 })
                .to('.link', { duration: 0.5, autoAlpha: 1, y: 0, stagger: .2, ease: "power3.out" });
            menuAnimation.play();
        } else {
            // Animation lorsque le menu est fermé
            gsap.to(menuButtonRef.current, { rotation: 0, duration: 0.3, ease: 'power2.out' });
            menuAnimationBack
                .to('.link', { duration: 0.5, autoAlpha: 0, y: 50, stagger: .2, ease: "power3.out" })
                .to(navMain, { duration: 0.5, width: 0, clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)", ease: "power4.in", x: 0, y: 0, z: 0 });
            menuAnimationBack.play();
        }
    }, [toggle]);

    return (
        <>
            <nav id="nav-main" className="skew" ref={navMainRef}>
                <ul>
                    <li className="link"><a href="#work">Work</a></li>
                    <li className="link"><a href="#skills">Skills</a></li>
                    <li className="link"><a href="#qualities">Qualities</a></li>
                    <li className="link"><a href="#hobbies">Hobbies</a></li>
                    {/* <li className="link"><a href="#contact">contact</a></li> */}
                </ul>
            </nav>
            <button id="menu-button" className="menu-button" onClick={handleOnClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={menuButtonRef} aria-label="Ouvrir le menu de navigation">
                {toggle ? <i className="fa-sharp fa-solid fa-xmark" /> : <i className="fa-solid fa-plus" />}
            </button>
        </>
    );
};

export default Nav;
