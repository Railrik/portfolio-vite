import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../../hooks/LangContext';

import './Wrapper.scss';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import GithubBtn from '../Github-btn/GithubBtn';
import Header from '../Header/Header';
import Lang from '../Lang/Lang';
import Work from '../Pages/Work/Work';

import logoImg from '../../assets/img/logo.png';
import logoWhiteImg from '../../assets/img/logo-white.png';
import Skills from '../Pages/Skills/Skills';
import useScrollEffect from '../../hooks/useScrollEffect';
import Qualities from '../Pages/Qualities/Qualities';
import Hobbies from '../Pages/Hobbies/Hobbies';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Footer/Footer';

const Wrapper = () => {
    const [scrub, setScrub] = useState(1.2)
    const [lang, setLang] = useState(1.2)
    let { currentLanguage } = useLang();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setupSectionsAnimations();
        setupSectionsChangeBgColor();
    }, []);

    useEffect(() => {
        setLang(currentLanguage);
    }, [currentLanguage]);

    // Configuration des animations de défilement des sections
    const setupSectionsAnimations = () => {
        const sections = document.querySelectorAll("section");

        sections.forEach((section, index) => {
            const wrapperContent = section.querySelector(".wrapper-content");
            // const h2Height = section.querySelector(".demo-text h2").offsetHeight;
            // console.log(h2Height);
            const isEven = index % 2 === 0;
            if (wrapperContent) {
                const [x, xEnd] = isEven
                    ? [(wrapperContent.scrollWidth) * -1, 0]
                    : ["100%", (wrapperContent.scrollWidth - section.offsetWidth) * -1];

                gsap.fromTo(wrapperContent, { x }, {
                    x: xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: scrub,
                    },
                });
            }
        });
    };

    // Configuration du changement de couleur de fond en fonction des sections
    const setupSectionsChangeBgColor = () => {
        const sections = document.querySelectorAll(".section");
        const logoImage = document.getElementById("logo");

        sections.forEach((section, index) => {
            const isEven = index % 2 === 0;
            const tl = gsap.timeline({
                scrollTrigger: {
                    markers: false,
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => handleSectionEnter(tl, isEven),
                    onEnterBack: () => handleSectionEnterBack(tl, isEven),
                    onLeave: () => handleSectionLeave(tl, isEven),
                    onLeaveBack: () => handleSectionLeaveBack(tl, isEven),
                },
                defaults: {
                    duration: .2, ease: "power3.in",
                },

            });

            const handleSectionEnter = (tl, isEven) => {
                const targetBgColor = isEven ? '#212121' : '#beccd4';
                const targetColor = isEven ? '#beccd4' : '#212121';
                const targetLogoSrc = isEven ? logoWhiteImg : logoImg;

                logoImage.src = targetLogoSrc;

                tl.to("body, nav", { backgroundColor: targetBgColor })
                    .to("nav ul li a, #text-anim ul li", { color: targetColor })
                    .to(".demo-text .text", { css: { "-webkit-text-stroke": `2px ${targetColor}` } })
                gsap.to(".menu-button, #github-icon, #language-switch", { color: targetColor, border: `2px solid ${targetColor}` })
                gsap.to(".progress-info-fill", {
                    backgroundImage: `linear-gradient(${targetColor}, ${targetColor})`,
                });

            };

            const handleSectionEnterBack = (tl, isEven) => {
                const targetBgColor = isEven ? '#212121' : '#beccd4';
                const targetColor = isEven ? '#beccd4' : '#212121';
                const targetLogoSrc = isEven ? logoWhiteImg : logoImg;

                logoImage.src = targetLogoSrc;

                tl.to("body, nav", { backgroundColor: targetBgColor })
                    .to("nav ul li a,#text-anim ul li", { color: targetColor })
                    .to(".demo-text .text", { css: { "-webkit-text-stroke": `2px ${targetColor}` } })
                gsap.to(".menu-button, #github-icon, #language-switch", { color: targetColor, border: `2px solid ${targetColor}` })
                gsap.to(".progress-info-fill", {
                    backgroundImage: `linear-gradient(${targetColor}, ${targetColor})`,
                });
            };

            const handleSectionLeave = (tl, isEven) => {
                const targetBgColor = isEven ? '#beccd4' : '#212121';
                const targetColor = isEven ? '#212121' : '#beccd4';
                const targetLogoSrc = isEven ? logoImg : logoWhiteImg;

                logoImage.src = targetLogoSrc;

                tl.to("body, nav", { backgroundColor: targetBgColor })
                    .to("nav ul li a,#text-anim ul li", { color: targetColor })
                    .to(".demo-text .text", { css: { "-webkit-text-stroke": `2px ${targetColor}` } })
                gsap.to(".menu-button, #github-icon, #language-switch", { color: targetColor, border: `2px solid ${targetColor}` })
                gsap.to(".progress-info-fill", {
                    backgroundImage: `linear-gradient(${targetColor}, ${targetColor})`,
                });
            };

            const handleSectionLeaveBack = (tl, isEven) => {
                const targetBgColor = isEven ? '#beccd4' : '#212121';
                const targetColor = isEven ? '#212121' : '#beccd4';
                const targetLogoSrc = isEven ? logoImg : logoWhiteImg;

                logoImage.src = targetLogoSrc;

                tl.to("body, nav", { backgroundColor: targetBgColor })
                    .to("nav ul li a,#text-anim ul li", { color: targetColor })
                    .to(".demo-text .text", { css: { "-webkit-text-stroke": `2px ${targetColor}` } })
                gsap.to(".menu-button, #github-icon, #language-switch", { color: targetColor, border: `2px solid ${targetColor}` })
                gsap.to(".progress-info-fill", {
                    backgroundImage: `linear-gradient(${targetColor}, ${targetColor})`,
                });
            };

        });
    };
    useScrollEffect();
    return (
        <div className="wrapper">
            <Progress scrub={scrub} />
            <Logo />
            <Nav />
            <GithubBtn />
            <Header scrub={scrub} />
            <Lang />
            <main>
                <Work scrub={scrub} lang={lang} />
                <Skills scrub={scrub} />
                <Qualities />
                <Hobbies />
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

export default Wrapper;
