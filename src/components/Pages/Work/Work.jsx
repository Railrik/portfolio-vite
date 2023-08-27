import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Work.scss';
import peopixsMainVideo from '../../../assets/videos/work/peopixs/peopixs-main.mp4';
import splineVideo from '../../../assets/videos/work/spline/cv-spline.mp4';
import svgProjectImg from '../../../assets/img/work/thething/desert.svg';
import mydevMainVideo from '../../../assets/videos/work/mydev/mydev.mp4';
import shopMydevtImg from '../../../assets/img/work/shop.mydev/1.png';
import snakeMainVideo from '../../../assets/videos/work/snakes/snakes.mp4';

const Work = ({ scrub }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animation pour les titres des sections
        const animateSectionTitles = () => {
            gsap.fromTo(
                ".other-creations h3",
                {
                    scale: 0,
                    y: '50vh'
                },
                {
                    scale: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".section-work",
                        markers: false,
                        start: "bottom center",
                        end: "bottom bottom",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        };
        animateSectionTitles();

        // Fonction pour animer les filtres de fond
        const animateBackgroundFilters = (triggerClass) => {
            gsap.to(triggerClass, {
                filter: "blur(5px)",
                opacity: 0.1,
                scrollTrigger: {
                    trigger: triggerClass,
                    start: "bottom bottom",
                    end: "bottom +=50vh",
                    scrub: scrub,
                }
            });
        };

        animateBackgroundFilters(".bg-cmachance", ".bg-title");
        animateBackgroundFilters(".bg-cmahdf", ".bg-cmachance");
        animateBackgroundFilters(".bg-reveleTonDestin", ".bg-cmahdf");
        animateBackgroundFilters(".bg-taxeApprentissage", ".bg-reveleTonDestin");

        // Nettoyage des événements dans useEffect
        return () => {
            // Supprimer tous les événements ScrollTrigger
            ScrollTrigger.getAll().forEach(instance => {
                instance.kill();
            });
        };
    }, []);

    return (
        <>
            <div className="section section-work" id="work">
                <section className="demo-text">
                    <h2 className="wrapper-content text">Work</h2>
                </section>
                <section className="demo-gallery gallery-type-1">
                    <article>
                        <ul className="wrapper-content">
                            <li />
                            <li>
                                <a href="#modal-1" className="modal-trigger" data-modal-id="modal-1">
                                    <video autoPlay muted loop>
                                        <source src={peopixsMainVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </a>
                            </li>
                            <li>
                                <a href="#modal-2" className="modal-trigger" data-modal-id="modal-2">
                                    <video autoPlay muted loop>
                                        <source src={splineVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </a>
                            </li>
                            <li>
                                <a href="#modal-3" className="modal-trigger" data-modal-id="modal-3">
                                    <img src={svgProjectImg} alt='SVG Project' />
                                </a>
                            </li>
                        </ul>
                    </article>
                </section>
                <section className="demo-gallery gallery-type-1">
                    <article>
                        <ul className="wrapper-content">
                            <li>
                                <a href="#modal-4" className="modal-trigger" data-modal-id="modal-4">
                                    <video autoPlay muted loop>
                                        <source src={mydevMainVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </a>
                            </li>
                            <li>
                                <a href="#modal-5" className="modal-trigger" data-modal-id="modal-5">
                                    <img src={shopMydevtImg} alt="shop.mydev.fr" />
                                </a>
                            </li>
                            <li>
                                <a href="#modal-6" className="modal-trigger" data-modal-id="modal-6">
                                    <video autoPlay muted loop>
                                        <source src={snakeMainVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </a>
                            </li>
                            <li />
                        </ul>
                    </article>
                </section>
            </div>
            <div className="section">
                <section className="other-creations">
                    <article className="bg-title">
                        <h3>Other creations</h3>
                    </article>
                    <article className="bg">
                        <div className="bg-cmachance" />
                        <a href="https://cmachance.fr" target="_blank"><span className="dates">2019 - 2021</span>cmachance<span className="project-link">PHP 7 | Bootstrap | jQuery | MariaDb</span></a>
                    </article>
                    <article className="bg">
                        <div className="bg-cmahdf" />
                        <a href="https://www.cma-hautsdefrance.fr/" target="_blank"><span className="dates">2020 - 2021</span>CMA HDF<span className="project-link">Wordpress</span></a>
                    </article>
                    <article className="bg">
                        <div className="bg-reveleTonDestin" />
                        <a href="https://www.cma-hautsdefrance.fr/reveletondestin/" target="_blank"><span className="dates">2020 - 2021</span>Revele ton destin<span className="project-link">PHP 7 | HTML | CSS | JS
                        </span></a>
                    </article>
                    <article className="bg">
                        <div className="bg-taxeApprentissage" />
                        <a href="https://cma-hautsdefrance.fr/versement-taxe-apprentissage/" target="_blank"><span className="dates">2020 - 2021</span>Taxe d'apprentissage<span className="project-link">PHP 7 | HTML | CSS | JS | API</span></a>
                    </article>
                </section>
                <article className="bg-empty" />

            </div>

        </>
    );
};

export default Work;