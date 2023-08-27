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

const SkillItem = ({ text, index, scrub }) => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#skill-${index}`,
                start: 'top center',
                end: 'bottom center',
                scrub: scrub,
            },
            ease: 'power3.out',
        });

        tl.to(`#skill-${index}`, {
            scale: 2,
            opacity: 1,
            duration: 0.8,
        });

        tl.to(`#skill-${index}`, {
            scale: 1,
            opacity: 0.4,
            duration: 0.5,
        });
    }, [index]);

    return <li id={`skill-${index}`}>{text}</li>;
};

const Skills = ({ scrub }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set('#text-anim ul li', { scale: 0, opacity: 0 });

        return () => {
            ScrollTrigger.getAll().forEach(instance => {
                instance.kill();
            });
        };
    }, []);

    return (
        <section className="section section-skills" id="skills">
            <section className="demo-text">
                <h2 className="wrapper-content text">Skills</h2>
            </section>
            <article id="text-anim" className="lerp">
                <ul>
                    {skillsList.map((skill, index) => (
                        <SkillItem key={index} text={skill.text} index={index} scrub={scrub} />
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Skills;
