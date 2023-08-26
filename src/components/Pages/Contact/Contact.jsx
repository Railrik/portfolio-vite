import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Contact.scss';

const Contact = () => {
    const redirectToLinkedIn = () => {
        // Rediriger vers la page LinkedIn
        window.open('https://www.linkedin.com/in/benjamin-ligny/', '_blank');
    };

    const composeEmail = () => {
        // Ouvrir une fenêtre de composition d'e-mail
        window.open('mailto:benjamin@ligny.pro');
    };

    useEffect(() => {


        gsap.set('.btn-contact-left', { x: '-100vw' });
        gsap.set('.btn-contact-right', { x: '100vw' });

        gsap.to(".btn-contact-left", {
            x: 0,
            scrollTrigger: {
                trigger: ".section-contact",
                start: "top center",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".btn-contact-right", {
            x: 0,
            scrollTrigger: {
                trigger: ".section-contact",
                start: "top center",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <>
            <div className="section section-contact" id="contact">
                <section className="demo-text">
                    <div className="wrapper-content text">Contact</div>
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

        </>
    );
};

export default Contact;
