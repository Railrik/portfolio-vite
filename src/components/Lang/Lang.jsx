import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import './Lang.scss';

const Lang = () => {
    const text = {
        loading: {
            en: "Loading",
            fr: "Chargement",
        },
        scroll: {
            en: "Scroll",
            fr: "Scroll",
        },
        job: {
            en: "Web Developer",
            fr: "Développeur Web",
        },
        link: {
            en: "Go to project",
            fr: "Voir le projet",
        },
        saveSvg: {
            en: "Save the SVG",
            fr: "Enregistrer le SVG",
        },
        sky: {
            en: "SKY",
            fr: "CIEL",
        },
        skin: {
            en: "SKIN",
            fr: "PEAU",
        },
        ground: {
            en: "GROUND",
            fr: "SOL",
        },
        otherCreations: {
            en: "Other creations",
            fr: "Autres créations",
        },
        spinKeyframes: {
            0: {
                en: "Innovative",
                fr: "Innovant",
            },
            10: {
                en: "Adventurous",
                fr: "Aventureux",
            },
            20: {
                en: "Visionary",
                fr: "Visionnaire",
            },
            30: {
                en: "Passionate",
                fr: "Passionné",
            },
            40: {
                en: "Curious",
                fr: "Curieux",
            },
            50: {
                en: "Ambitious",
                fr: "Ambitieux",
            },
            60: {
                en: "Inspired",
                fr: "Inspiré",
            },
            70: {
                en: "Dynamic",
                fr: "Dynamique",
            },
            80: {
                en: "Patient",
                fr: "Patient",
            },
            90: {
                en: "Collaborative",
                fr: "Collaboratif",
            },
        },
        menuItems: {
            myWork: {
                en: "Work",
                fr: "Créations",
            },
            mySkills: {
                en: "Skills",
                fr: "Compétences",
            },
            myHobbies: {
                en: "Hobbies",
                fr: "Loisirs",
            },
            aboutMe: {
                en: "Qualities",
                fr: "Qualités",
            },
            contact: {
                en: "Contact",
                fr: "Contact",
            },
        },
    };

    const [currentLanguage, setCurrentLanguage] = useState('fr');
    const styleTag = document.createElement("style");

    const updateTextContent = () => {
        const loaderText = document.querySelector(".loader h3");
        const jobTitle = document.querySelector("hgroup h3");
        const menuItems = document.querySelectorAll(".link a");

        loaderText.textContent = text.loading[currentLanguage];
        jobTitle.textContent = text.job[currentLanguage];
        menuItems[0].textContent = text.menuItems.myWork[currentLanguage];
        menuItems[1].textContent = text.menuItems.mySkills[currentLanguage];
        menuItems[2].textContent = text.menuItems.aboutMe[currentLanguage];
        menuItems[3].textContent = text.menuItems.myHobbies[currentLanguage];
        menuItems[4].textContent = text.menuItems.contact[currentLanguage];
        document.querySelector(".section-work .demo-text .text").textContent = text.menuItems.myWork[currentLanguage];
        document.querySelector(".other-creations h3").textContent = text.otherCreations[currentLanguage];
        document.querySelector(".section-skills .demo-text .text").textContent = text.menuItems.mySkills[currentLanguage];
        document.querySelector(".section-qualities .demo-text .text").textContent = text.menuItems.aboutMe[currentLanguage];
        document.querySelector(".section-hobbies .demo-text .text").textContent = text.menuItems.myHobbies[currentLanguage];

        const spinKeyframesCSS = Object.entries(text.spinKeyframes).map(([key, value]) => {
            return `${key}% { content: "${value[currentLanguage]}"; }`;
        }).join("\n");
        styleTag.textContent = `@keyframes spin {\n${spinKeyframesCSS}\n}`;
        document.head.appendChild(styleTag);

    };


    // Fonction pour récupérer le langage sauvegardé dans un cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Fonction pour définir le cookie langage avec une durée d'expiration
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Convertion jour en milliseconde
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    const handleOnClick = () => {
        const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        setCurrentLanguage(newLanguage);
        setCookie('currentLanguage', newLanguage, 30); // Création d'un cookie avec 30 jours d'utilisation
    };

    useEffect(() => {
        const storedLanguage = getCookie('currentLanguage') || 'fr';
        setCurrentLanguage(storedLanguage);
    }, []);

    useEffect(() => {
        gsap.to(".loader h3, hgroup h3, .link a , #spin, .demo-text .text, .other-creations  h3", {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                updateTextContent();
                gsap.to(".loader h3, hgroup h3, .link a , #spin, .demo-text .text, .other-creations  h3", {
                    opacity: 1,
                    duration: 0.3
                });
            }
        })
    }, [currentLanguage]);


    return (
        <button id="language-switch" onClick={handleOnClick}>
            {currentLanguage}
        </button>
    );
};

export default Lang;
