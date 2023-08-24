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

const Wrapper = () => {
    const [scrub, setScrub] = useState(1.2)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        setupSectionsAnimations();
    }, []);

    const setupSectionsAnimations = () => {
        const sections = document.querySelectorAll("section");
        const scrub = 1.2;

        sections.forEach((section, index) => {
            const wrapperContent = section.querySelector(".wrapper-content");
            if (wrapperContent) {
                const isEven = index % 2 === 0;
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
