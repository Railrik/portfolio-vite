import React, { useEffect, useState } from 'react';
import headerVideo from '../../assets/videos/header.mp4';
import headerImagePng from '../../assets/img/header.png';
import headerImageWebP from '../../assets/img/header.webp';
import headerImageAvif from '../../assets/img/header.avif';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Header.scss';
const Header = ({ scrub }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setupHeaderAnimation();
        tiltesHeaderAnimation();
        setupVideoAnimation();
        setupMouseAnimation();
        setupProgressInfoAnimation();

        // Vérification de la taille d'écran pour déterminer si c'est un appareil mobile
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        // Gestionnaire pour suivre les changements de taille d'écran
        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        // Ajouter le gestionnaire d'événement pour le changement de taille d'écran
        mediaQuery.addListener(handleResize);

        // Nettoyer le gestionnaire d'événement lors du démontage du composant
        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, [])

    const tiltesHeaderAnimation = () => {
        // Effet GSAP pour les éléments H1 et H2 du header
        gsap.fromTo(["hgroup h1", "hgroup h2", "hgroup h3"], {
            opacity: 0,
            y: "-100vh",
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });
    }

    const setupHeaderAnimation = () => {
        const header = document.getElementById("main-header");

        gsap.to(header, {
            x: "-210vh",
            opacity: 0,
            scrollTrigger: {
                trigger: header,
                start: "top top",
                end: "bottom top",
                scrub: scrub,
            },
        });
    };

    const setupVideoAnimation = () => {
        const scrub = 1.2;
        let oldVideoScrollY = 0;

        gsap.to(".header-video", {
            scrollTrigger: {
                trigger: ".header-video",
                start: "top top",
                end: "bottom top",
                scrub: scrub,
                onUpdate: (self) => {
                    const videoScrollY = self.scroll.total;
                    const videoSkew = videoScrollY - oldVideoScrollY;
                    gsap.to(".header-video", {
                        skewY: videoSkew * -0.1,
                        overwrite: "auto",
                    });
                    oldVideoScrollY = videoScrollY;
                },
            },
        });
    };

    const setupMouseAnimation = () => {
        gsap.fromTo(".mouse", {
            scale: 1,
        }, {
            scale: 0,
            scrollTrigger: {
                trigger: "header",
                start: "10% top",
                end: "bottom top",
                toggleActions: "play none none reverse",
            },
        });
    };

    const setupProgressInfoAnimation = () => {
        gsap.fromTo(".progress-info", {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: "header",
                start: "10% top",
                end: "bottom top",
                toggleActions: "play none none reverse",
            },
        });
    };

    return (
        <header id="main-header">
            {isMobile ? (
                <picture>
                    <source srcSet={headerImageWebP} type="image/webp" />
                    <source srcSet={headerImageAvif} type="image/avif" />
                    <img className="header-image" src={headerImagePng} alt="Header" />
                </picture>
            ) : (
                <video className="header-video" autoPlay muted playsInline loop>
                    <source src={headerVideo} type="video/mp4" />
                </video>
            )}
            <hgroup>
                <h1>Benjamin Ligny</h1>
                <h2>Portfolio</h2>
                <h3>Web Developer</h3>
            </hgroup>
            <span className="scroll-btn">
                <a href="#" aria-label="Scroll">
                    <span className="mouse">
                        <span> </span>
                    </span>
                </a>
            </span>
        </header>
    );
};

export default Header;