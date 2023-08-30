import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Progress.scss';

const Progress = ({ scrub }) => {
    const [animationDuration, setAnimationDuration] = useState(0);

    useEffect(() => {
        setAnimationDuration(document.documentElement.scrollHeight - window.innerHeight);
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: scrub,

                    onEnterBack: () => {
                        gsap.to(".progress-info", { scale: 1, duration: 0 });
                        gsap.to(["#scroll-text-1", "#scroll-text-2"], { opacity: 1, duration: 0.5 });
                        gsap.to(".progress-info-fill", { backgroundImage: "linear-gradient(var(--primary-color), var(--primary-color))" });
                    },
                    onLeave: () => {
                        gsap.to(".progress-info", { scale: 0, duration: 0 });
                        gsap.to(["#scroll-text-1", "#scroll-text-2"], { opacity: 0, duration: 0.5 });
                        gsap.to(".progress-info-fill", { backgroundImage: "linear-gradient(var(--primary-color), var(--primary-color))" });
                    },
                },
            })
            .fromTo(
                ".progress-info-fill",
                { backgroundSize: "0% 100%" },
                { backgroundSize: "100% 100%", duration: animationDuration },
                0
            )
            .fromTo(
                ".progress-info-fill-2",
                { backgroundSize: "0% 100%" },
                { backgroundSize: "0% 100%", duration: animationDuration },
                0
            );

    }, [animationDuration]);

    return (
        <div className="progress-info">
            <div className="progress-info-fill" id="scroll-text-1">___</div>
            <div className="progress-info-fill-2" id="scroll-text-2">___</div>
        </div>
    );
};

export default Progress;
