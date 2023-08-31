import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Qualities.scss';

import meOne from '../../../assets/img/me/1.jpg';
import meTwo from '../../../assets/img/me/2.jpg';

const Qualities = ({ scrub }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;

        gsap.set(container, { scale: 0, rotation: 0 });

        const desktopStart = window.innerWidth >= 992 ? 'bottom center' : 'bottom center';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#qualities h2',
                start: desktopStart,
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.comparisonSection').forEach((section) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'center center',
                    end: () => `+=${section.offsetWidth}`,
                    scrub: scrub,
                    pin: true,
                    anticipatePin: .1, // anticipe la fin du scroll
                },
                defaults: { ease: 'none' },
            });
            // animer le conteneur dans un sens...
            tl.fromTo(section.querySelector('.afterImage'), { xPercent: 100, x: 0 }, { xPercent: 0 })
                // ...et l'image dans l'autre sens (en même temps)
                .fromTo(section.querySelector('.afterImage img'), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
        });
    }, []);

    return (
        <div className="section section-qualities" id="qualities">
            <section className="demo-text">
                <h2 className="wrapper-content text">Qualities</h2>
            </section>
            <section className="comparisonSection">
                <div className="comparisonImage beforeImage">
                    <img src={meOne} alt="before" />
                </div>
                <div className="comparisonImage afterImage">
                    <img src={meTwo} alt="after" />
                </div>
                <div className="container-qualities" ref={containerRef}>
                    <span id="spin" />
                </div>
            </section>
        </div>
    );
};

export default Qualities;
