import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrollEffect from '../../../hooks/useScrollEffect'; // Importez le hook personnalisé

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

        gsap.to(".bg-cmachance", {
            filter: "blur(5px)",
            opacity: .1,
            scrollTrigger: {
                trigger: ".bg-title",
                start: "bottom center",
                end: "bottom +=50vh ",
                scrub: scrub,
            }
        });

        gsap.to(".bg-cmahdf", {
            filter: "blur(5px)",
            opacity: 0.1,
            scrollTrigger: {
                trigger: ".bg-cmachance",
                start: "bottom center",
                end: "bottom +=50vh ",
                scrub: scrub,
            }
        });
        gsap.to(".bg-reveleTonDestin", {
            filter: "blur(5px)",
            opacity: 0.1,
            scrollTrigger: {
                trigger: ".bg-cmahdf",
                start: "bottom center",
                end: "bottom +=50vh ",
                scrub: scrub,
            }
        });
        gsap.to(".bg-taxeApprentissage", {
            filter: "blur(5px)",
            opacity: 0.1,
            scrollTrigger: {
                trigger: ".bg-reveleTonDestin",
                start: "bottom center",
                end: "bottom +=50vh ",
                scrub: scrub,
            }
        });
    }, [])

    useScrollEffect();
    return (
        <>
            <div className="section section-work" id="my-work">
                <section className="demo-text">
                    <div className="wrapper-content text">Work</div>
                </section>
                <section className="demo-gallery gallery-type-1">
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
                </section>
                <section className="demo-gallery gallery-type-1">
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
                </section>
            </div>
            <div className="section">
                <section className="other-creations">
                    <div className="bg-title">
                        <h3>Other creations</h3>
                    </div>
                    <div className="bg">
                        <div className="bg-cmachance" />
                        <a href="https://cmachance.fr" target="_blank"><span className="dates">2019 - 2021</span>cmachance<span className="project-link">PHP 7 | Bootstrap | jQuery | MariaDb</span></a>
                    </div>
                    <div className="bg">
                        <div className="bg-cmahdf" />
                        <a href="https://www.cma-hautsdefrance.fr/" target="_blank"><span className="dates">2020 - 2021</span>CMA HDF<span className="project-link">Wordpress</span></a>
                    </div>
                    <div className="bg">
                        <div className="bg-reveleTonDestin" />
                        <a href="https://www.cma-hautsdefrance.fr/reveletondestin/" target="_blank"><span className="dates">2020 - 2021</span>Revele ton destin<span className="project-link">PHP 7 | HTML | CSS | JS
                        </span></a>
                    </div>
                    <div className="bg">
                        <div className="bg-taxeApprentissage" />
                        <a href="https://cma-hautsdefrance.fr/versement-taxe-apprentissage/" target="_blank"><span className="dates">2020 - 2021</span>Taxe d'apprentissage<span className="project-link">PHP 7 | HTML | CSS | JS | API</span></a>
                    </div>
                </section>
                <div className="bg-empty" />

            </div>

        </>
    );
};

export default Work;