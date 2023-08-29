import React, { useEffect } from 'react';
import headerVideo from '../../assets/videos/header.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Header.scss';
const Header = ({ scrub }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setupHeaderAnimation();
        tiltesHeaderAnimation();
        setupVideoAnimation();
        setupMouseAnimation();
        setupProgressInfoAnimation();
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
            <video className="header-video" autoPlay muted loop>
                <source src={headerVideo} type="video/mp4" />
            </video>
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