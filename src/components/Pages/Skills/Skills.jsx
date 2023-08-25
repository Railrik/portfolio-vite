import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.scss';

const skillsList = [
    { text: 'HTML' },
    { text: 'CSS' },
    { text: 'JavaScript' },
    { text: 'React.js' },
    { text: 'Gsap' },
    { text: 'Bootstrap' },
    { text: 'PHP' },
    { text: 'Node.js' },
    { text: 'Solidity' },
    { text: 'LAMP' },
    { text: 'API' },
    { text: 'Photoshop' },
    { text: 'IA' },
];

const Skills = ({ scrub }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set('#text-anim ul li', { scale: 1, opacity: 0 });

        const triggers = document.querySelectorAll('#text-anim ul li');

        triggers.forEach((trigger, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: 'top 50%', // Commencez l'animation lorsque le début de l'élément atteint 80% de la vue
                    end: 'bottom 50%', // Terminez l'animation lorsque le début de l'élément atteint 20% de la vue
                    scrub: scrub,
                },
                ease: "power3.out",

            });

            tl.to(trigger, {
                scale: 2,
                opacity: 1,
                duration: 0.5,
            });

            tl.to(trigger, {
                scale: 1,
                opacity: 0.1,
                duration: 0.5,
            });
        });

    }, []);

    return (
        <div className="section section-skills" id="my-skills">
            <section className="demo-text">
                <div className="wrapper-content text">Skills</div>
            </section>
            <section id="text-anim">
                <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index}>
                            {skill.text}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Skills;