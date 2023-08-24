import React, { useEffect } from 'react';
import headerVideo from '../../assets/videos/header.mp4';
import { gsap } from 'gsap';

import './Header.scss';
const Header = () => {

    useEffect(() => {
        // Effet GSAP pour les éléments H1 et H2 du header
        gsap.fromTo(["h1", "h2", "h3"], {
            opacity: 0,
            y: "-100vh",
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });
    }, [])



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
                <a href="#">
                    <span className="mouse">
                        <span> </span>
                    </span>
                </a>
            </span>
        </header>

    );
};

export default Header;