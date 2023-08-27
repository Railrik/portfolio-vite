import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Contact.scss';

const Contact = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const btnContactLeft = document.querySelector('.btn-contact-left');
        const btnContactRight = document.querySelector('.btn-contact-right');

        if (btnContactLeft && btnContactRight) {
            gsap.set(btnContactLeft, { x: '100vw' });
            gsap.set(btnContactRight, { x: '-100vw' });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-contact",
                    start: "top center",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(btnContactLeft, {
                x: 0,
            });

            tl.to(btnContactRight, {
                x: 0,
            });

            return () => {
                tl.kill();
            };
        }
    }, []);

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/benjamin-ligny/', '_blank');
    };

    const composeEmail = () => {
        window.open('mailto:benjamin@ligny.pro');
    };

    return (
        <div className="section section-contact" id="contact">
            <section className="demo-text">
                <h2 className="wrapper-content text">Contact</h2>
            </section>
            <div className="contact-btns">
                <button className="btn-3 btn-contact-left" onClick={redirectToLinkedIn}>
                    Linkedin
                </button>
                <button className="btn-4 btn-contact-right" onClick={composeEmail}>
                    E-mail
                </button>
            </div>
        </div>
    );
};

export default Contact;
