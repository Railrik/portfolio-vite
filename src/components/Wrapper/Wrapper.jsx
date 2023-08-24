import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const Wrapper = () => {
    const [scrub, setScrub] = useState(1.2)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setupSectionsAnimations();
        setupSectionsChangeBgColor();
    }, []);

    // Configuration des animations de défilement des sections
    const setupSectionsAnimations = () => {
        const sections = document.querySelectorAll("section");

        sections.forEach((section, index) => {
            const wrapperContent = section.querySelector(".wrapper-content");
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
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => handleSectionEnter(tl, isEven),
                    onEnterBack: () => handleSectionEnterBack(tl, isEven),
                    onLeave: () => handleSectionLeave(tl, isEven),
                    onLeaveBack: () => handleSectionLeaveBack(tl, isEven),
                },
            });

            const handleSectionEnter = (tl, isEven) => {
                const targetBgColor = isEven ? '#212121' : '#beccd4';
                const targetLogoSrc = isEven ? logoWhiteImg : logoImg;

                logoImage.src = targetLogoSrc;

                tl.to("body", { backgroundColor: targetBgColor });
            };

            const handleSectionEnterBack = (tl, isEven) => {
                const targetBgColor = isEven ? '#212121' : '#beccd4';
                const targetLogoSrc = isEven ? logoWhiteImg : logoImg;

                logoImage.src = targetLogoSrc;

                tl.to("body", { backgroundColor: targetBgColor });
            };

            const handleSectionLeave = (tl, isEven) => {
                const targetBgColor = isEven ? '#beccd4' : '#212121';
                const targetLogoSrc = isEven ? logoImg : logoWhiteImg;

                logoImage.src = targetLogoSrc;

                tl.to("body", { backgroundColor: targetBgColor });
            };

            const handleSectionLeaveBack = (tl, isEven) => {
                const targetBgColor = isEven ? '#beccd4' : '#212121';
                const targetLogoSrc = isEven ? logoImg : logoWhiteImg;

                logoImage.src = targetLogoSrc;

                tl.to("body", { backgroundColor: targetBgColor });
            };

        });
    };
    return (
        <div className="wrapper">
            <Progress />
            <Logo />
            <Nav />
            <GithubBtn />
            <Header scrub={scrub} />
            <Lang />
            <main>
                <Work scrub={scrub} />
            </main>
        </div>
    );
};

export default Wrapper;
