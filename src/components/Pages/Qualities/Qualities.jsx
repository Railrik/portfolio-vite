import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Qualities.scss';

const Qualities = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;

        gsap.set(container, { scale: 0, rotation: 0 });

        const desktopStart = window.innerWidth >= 992 ? "center center" : "-=100vh center";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: desktopStart,
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            },
        });

        tl.to(container, {
            rotation: 360,
            scale: 1,
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="section section-qualities" id="qualities">
            <section className="demo-text">
                <h2 className="wrapper-content text">Qualities</h2>
            </section>
            <div className="container-qualities" ref={containerRef}>
                <span id="spin" />
            </div>
        </div>
    );
};

export default Qualities;
