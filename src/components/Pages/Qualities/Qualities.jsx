import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './Qualities.scss';

const Qualities = () => {

    useEffect(() => {
        gsap.set('.container-qualities', { scale: 0, rotation: 0 });

        const desktopStart = window.innerWidth >= 992 ? "30% center" : "-=10% top";

        gsap.to(".container-qualities", {
            rotation: 360,
            scale: 1,
            scrollTrigger: {
                trigger: ".section-qualities",
                markers: false,
                start: desktopStart,
                end: "bottom bottom",
                pin: false,
                toggleActions: "play none none reverse",
            },
        });
    }, [])



    return (
        <div className="section section-qualities" id="qualities">
            <section className="demo-text">
                <div className="wrapper-content text">Qualities</div>
            </section>
            <div className="container-qualities">
                <span id="spin" />
            </div>
        </div>

    );
};

export default Qualities;