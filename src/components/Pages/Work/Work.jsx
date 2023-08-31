import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Fancybox from '../../../hooks/FancyBox';

import './Work.scss';
import peopixsMainVideo from '../../../assets/videos/work/peopixs/peopixs-main.mp4';
import peopixsMainJpg from '../../../assets/img/work/peopixs/peopixs.jpg';
import peopixsMainWebP from '../../../assets/img/work/peopixs/peopixs.webp';
import peopixsMainAvif from '../../../assets/img/work/peopixs/peopixs.avif';
import peopixsVideoExplication1 from '../../../assets/videos/work/peopixs/peopixs-1.mp4';
import peopixsVideoExplication2 from '../../../assets/videos/work/peopixs/peopixs-2.mp4';
import peopixsVideoExplication3 from '../../../assets/videos/work/peopixs/peopixs-3.mp4';
import peopixsVideoExplication4 from '../../../assets/videos/work/peopixs/peopixs-4.mp4';
import peopixsVideoExplication5 from '../../../assets/videos/work/peopixs/peopixs-5.mp4';

import shopMydevtImgExplication1 from '../../../assets/img/work/shop.mydev/1.jpg';
import shopMydevtImgExplication2 from '../../../assets/img/work/shop.mydev/2.jpg';
import shopMydevtImgExplication3 from '../../../assets/img/work/shop.mydev/3.jpg';
import shopMydevtImgExplication4 from '../../../assets/img/work/shop.mydev/4.jpg';
import shopMydevtImgExplication5 from '../../../assets/img/work/shop.mydev/5.jpg';
import shopMydevtImgExplication6 from '../../../assets/img/work/shop.mydev/6.jpg';
import shopMydevtImgExplication7 from '../../../assets/img/work/shop.mydev/7.jpg';
import shopMydevtImgExplication8 from '../../../assets/img/work/shop.mydev/8.jpg';
import shopMydevtImgExplication9 from '../../../assets/img/work/shop.mydev/9.jpg';

import splineVideo from '../../../assets/videos/work/spline/cv-spline.mp4';
import splineMainJpg from '../../../assets/img/work/spline/spline.jpg';
import splineMainWebP from '../../../assets/img/work/spline/spline.webp';
import splineMainAvif from '../../../assets/img/work/spline/spline.avif';

import svgProjectImg from '../../../assets/img/work/thething/desert.svg';

import mydevMainVideo from '../../../assets/videos/work/mydev/mydev.mp4';
import mydevMainJpg from '../../../assets/img/work/mydev/mydev.jpg';
import mydevMainWebP from '../../../assets/img/work/mydev/mydev.webp';
import mydevMainAvif from '../../../assets/img/work/mydev/mydev.avif';

import shopMydevtImg from '../../../assets/img/work/shop.mydev/1.jpg';

import snakeMainVideo from '../../../assets/videos/work/snakes/snakes.mp4';
import snakeMainJpg from '../../../assets/img/work/snakes/snakes.jpg';
import snakeMainWebP from '../../../assets/img/work/snakes/snakes.webp';
import snakeMainAvif from '../../../assets/img/work/snakes/snakes.avif';

const Work = ({ scrub, lang, isMobile }) => {
    const [renderedModals, setRenderedModals] = useState([]);
    const [svgAttributesBg, setSvgAttributesBg] = useState("#E0B6B6");
    const [svgAttributesSkin, setSvgAttributesSkin] = useState("#c59b95");
    const [svgAttributesOutline, setSvgAttributesOutline] = useState("#FED4A2");
    const [svgImage, setSvgImage] = useState();

    const [isPeopixsWebPLoaded, setIsPeopixsWebPLoaded] = useState(false);
    const [isPeopixsAvifLoaded, setIsPeopixsAvifLoaded] = useState(false);
    const [isSplineWebPLoaded, setIsSplineWebPLoaded] = useState(false);
    const [isSplineAvifLoaded, setIsSplineAvifLoaded] = useState(false);
    const [isMydevWebPLoaded, setIsMydevWebPLoaded] = useState(false);
    const [isMydevAvifLoaded, setIsMydevAvifLoaded] = useState(false);
    const [isSnakeWebPLoaded, setIsSnakeWebPLoaded] = useState(false);
    const [isSnakeAvifLoaded, setIsSnakeAvifLoaded] = useState(false);

    const commonModalOne = {
        id: 'modal-1',
        videoExplicationSrc: [peopixsVideoExplication1, peopixsVideoExplication2, peopixsVideoExplication3, peopixsVideoExplication4, peopixsVideoExplication5],
        link: 'https://peopixs.io',
        technologies: ["ReactJs", "Redux", "NodeJs", "MongoDb", "Solidity"],
    };
    const commonModalTwo = {
        id: 'modal-2',
        link: 'https://my.spline.design/platformerrabbitcopy-99e587e260d49724d3e06aff2cd20203/',
        technologies: ["Spline", "Three.js"],
    };
    const commonModalThree = {
        id: 'modal-3',
        imageSrc: svgProjectImg,
        link: null,
        technologies: ["SVG", "HTML", "CSS"],
    };
    const commonModalFour = {
        id: 'modal-4',
        link: 'https://mydev.fr',
        technologies: ["ReactJs", "PHP", "TsParticle"],
    };
    const commonModalFive = {
        id: 'modal-5',
        imgExplicationSrc: [shopMydevtImgExplication1, shopMydevtImgExplication2, shopMydevtImgExplication3, shopMydevtImgExplication4, shopMydevtImgExplication5, shopMydevtImgExplication6, shopMydevtImgExplication7, shopMydevtImgExplication8, shopMydevtImgExplication9],
        link: 'https://shop.mydev.fr',
        technologies: ["PHP", "Symfony 5", "Easy Admin", "Doctrine ORM", "mariaDb"],
    };
    const commonModalSix = {
        id: 'modal-6',
        link: 'https://www.snakesinyourwallet.xyz/',
        technologies: ["ReactJs", "Gsap", "Solidity", "smart contract", "Ethereum blockchain"],
    };

    const text = {
        link: {
            en: "Go to project",
            fr: "Voir le projet",
        },
        viewMore: {
            en: "View more",
            fr: "Voir plus",
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
    }
    const modalData = [
        {
            en: {
                ...commonModalOne,
                title: "Peopixs.io - 2023",
                content: 'Peopixs is an ongoing web 3 project in development. Peopixs are unique and fully customizable NFTs stored on the Ethereum blockchain. They are created by selecting desired options to craft a distinctive Peopix character. Data is stored on an IPFS server in Base64 format. This project operates with a React front-end, a NodeJs back-end, and a mongoDb database. Smart contract is create with Solidity language. The ultimate goal is to seamlessly integrate these Peopix characters into an interactive RPG-style game, akin to Pokémon on Game Boy. Players will have the ability to steer their characters using keyboard keys and engage in various scenarios and interactions within the gaming world, including quests and player-versus-environment (PVE) challenges. I have developed this game in JavaScript without using any frameworks. Additionally, I have crafted the game maps using the <a href="https://www.mapeditor.org/" target="_blank">Tiled</a> software.',
            },
            fr: {
                ...commonModalOne,
                title: "Peopixs.io - 2023",
                content: 'Peopixs est un projet web 3 en cours de développement. Les Peopixs sont des NFT uniques et entièrement personnalisables stockés sur la blockchain Ethereum. Ils sont créés en sélectionnant les options souhaitées pour créer un personnage Peopix unique. Les données sont stockées sur un serveur IPFS en Base64. Ce projet tourne avec un front React, un back NodeJs ainsi qu\'une base de données mongoDb. Le smart contract est développé avec le langage Solidity. L\'objectif ultime est d\'intégrer ces personnages Peopix dans un jeu interactif de style RPG, similaire à Pokémon sur Game Boy. Les joueurs pourront contrôler leurs personnages à l\'aide des touches du clavier et participer à différents scénarios et interactions au sein du monde du jeu, y compris des quêtes et des défis joueur contre environnement (PVE). J\'ai créé ce jeu en JavaScript sans utiliser de frameworks. De plus, j\'ai élaboré les cartes du jeu à l\'aide du logiciel <a href="https://www.mapeditor.org/" target="_blank">Tiled</a>.',
            }
        },
        {
            en: {
                ...commonModalTwo,
                title: "Interactive CV - 2023",
                content: "My resume, created using Spline, exemplifies the fusion of space, gaming, graphics, and interactivity. Through advanced interpolation and gravity techniques, I've crafted a dynamic journey that transcends static content. At the heart of this immersive experience, visitors can embody the role of a playful rabbit, maneuvering and animating it using keyboard keys to make it move and hop. Furthermore, certain sections of this interactive CV offer collision interactions, adding an extra dimension of engagement. I am committed to developing and enhancing this aspect of my portfolio, harnessing the capabilities of the Three.js engine integrated into <a href='https://spline.design/' target='_blank'>Spline</a> to create a captivating and immersive experience.",
            },
            fr: {
                ...commonModalTwo,
                title: "CV interactif - 2023",
                content: "Mon CV réalisé avec Spline illustre la fusion entre l'espace, le jeu, le graphisme et l'interactivité. Grâce à des techniques avancées d'interpolation et de gravité, j'ai façonné un parcours dynamique qui va bien au-delà d'un simple contenu statique. Au cœur de cette expérience immersive, les visiteurs peuvent endosser le rôle d'un petit lapin, le manœuvrant et l'animant à l'aide des touches du clavier pour le faire avancer et sautiller. De plus, certaines sections de ce CV interactif proposent des interactions de collision, ajoutant une dimension supplémentaire d'engagement. Je m'engage à développer et enrichir cette facette de mon portfolio, en tirant parti des capacités du moteur Three.js intégré dans <a href='https://spline.design/' target='_blank'>Spline</a> pour créer une expérience captivante et immersive.",
            },
        },
        {
            en: {
                ...commonModalThree,
                title: "SVG Example - 2023",
                content: "This project showcases an animated SVG image meticulously crafted with care and creativity using Adobe Illustrator. The animations have been integrated into the SVG file, enabling it to come to life directly within the browser. You have the capability to modify the colors of various elements of the illustration in real-time, allowing you to download the customized animation. This project serves as a remarkable demonstration of the power of SVG (Scalable Vector Graphics) in creating interactive images through HTML and CSS code.",

            },
            fr: {
                ...commonModalThree,
                title: "Exemple SVG - 2023",
                content: "Ce projet présente une image animée en SVG conçue avec soin et créativité à l'aide d'Adobe Illustrator. Les animations ont été incorporées dans le fichier SVG, ce qui lui permet de prendre vie directement dans le navigateur. Vous avec la possibilité de modifier les couleurs de différents éléments de l'illustration en temps réel pour ainsi télécharger l'animation modifiée. Ce projet est une belle démonstration de la puissance des SVG (Scalable Vector Graphics) dans la création d'images interactives dans du code HTML et CSS.",
            },
        },
        {
            en: {
                ...commonModalFour,
                title: "mydev - 2022",
                content: 'myDev.fr is a website specialized in creating customized websites and digital experiences. myDev offers services in communication, UI/UX design, Web3 development, and blockchain. With over fifteen years of experience, the myDev team provides personalized solutions to meet the diverse needs of its clients.',
            },
            fr: {
                ...commonModalFour,
                title: "mydev - 2022",
                content: "myDev.fr est un site web spécialisé dans la création de sites internet et d' expériences numériques sur mesure. mydev propose des services de communication, de design UI/UX, de développement Web3 et de blockchain. Avec plus de quinze ans d'expérience, l'équipe de myDev offre des solutions personnalisées pour répondre aux besoins variés de ses clients",
            },
        },
        {
            en: {
                ...commonModalFive,
                title: "shop mydev - 2022",
                content: "Shop myDev showcases a fully functional e-commerce website demo built using Symfony 5 and the EasyAdmin bundle for streamlined order management. Payments are seamlessly integrated using the Stripe API.",
                textExplicationSrc: ['Homepage of the e-commerce website', 'Description of the item and quantity to add to the cart', 'Example of filters', 'Selection of shipping and billing addresses before order confirmation', 'Payment of the order using Stripe', 'Order confirmation', 'Order history', 'Administration of the e-commerce website\'s products', 'Viewing and modifying order steps'],

            },
            fr: {
                ...commonModalFive,
                title: "shop mydev - 2022",
                content: "Shop myDev est une démonstration concrète d'un site e-commerce fonctionnel élaboré avec Symfony 5 et le bundle EasyAdmin pour une gestion simplifiée des commandes. Les paiements sont intégrés de manière fluide grâce à l'API Stripe.",
                textExplicationSrc: ['Page d\'accueil du site e-commerce', 'Description de l\'artcicle et du nombre à ajouter au panier', 'Exemple de filtres', 'Choix d\adresse d\'expédition et de facturation avant validation de la commande', 'Paiement de la commande avec Stripe', 'Confirmation de la commande', 'Historique des commandes', 'Administration des produits du site e-commerce', 'Visualisation, modification des étapes de la commande'],

            },
        },
        {
            en: {
                ...commonModalSix,
                title: "Snakes in your wallet - 2022",
                content: "I created this project using Remix and the Solidity language for the Ethereum smart contract. The frontend was developed in React and enhanced with GSAP animations for an immersive visual experience. The project showcases a collection of 10,000 unique NFTs representing hand-drawn pixel art Snakes, animated with 12 GIF frames, and equipped with over 140 attributes. Among them, 10 Snakes boast entirely distinctive traits. These NFTs are stored on the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.The <a href='https://etherscan.io/address/0x163e354107fbdcc781e9808b5e3bcbc576a119fd#code' target='_blank'>smart contract</a> allows for the free minting of an NFT every 24 hours, up to a limit of 10 NFTs.",
            },
            fr: {
                ...commonModalSix,
                title: "Snakes in your wallet - 2022",
                content: "J'ai créé ce projet en utilisant Remix et le langage Solidity pour le smart contract Ethereum. Le frontend a été développé en React et enrichi d'animations GSAP pour une expérience visuelle immersive. Le projet présente une collection de 10 000 NFT uniques représentant des Serpents dessinés à la main en art pixel, animés avec 12 images GIF et dotés de plus de 140 caractéristiques. Parmi eux, 10 Serpents possèdent des traits entièrement uniques. Ces NFT sont stockés sur la blockchain Ethereum sous forme de jetons ERC-721 et hébergés sur IPFS. Le <a href='https://etherscan.io/address/0x163e354107fbdcc781e9808b5e3bcbc576a119fd#code' target='_blank'>smart contract</a> permet de minter un NFT gratuitement toute les 24 heures , dans la limite de 10 NFT.",
            },
        },
    ];
    const galleryLinks = document.querySelectorAll('.gallery-type-1 .modal-trigger');
    //const modalContainer = document.getElementById('modal-container');

    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const handleMouseEnter = () => {
        gsap.to('.modal-close', { scale: 1.2, duration: 0.3, ease: 'power1.out' });
    };
    const handleMouseLeave = () => {
        gsap.to('.modal-close', { scale: 1, duration: 0.3, ease: 'power1.out' });
    };
    const closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        const modalBtnClose = document.getElementsByClassName('modal-close');
        gsap.to(modalBtnClose, { rotation: 360, scale: 0, duration: .7, ease: 'power2.out' });

        gsap.to(modal, {
            y: "-100vh",
            duration: 1,
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = 'none'; // Masquez la modal après l'animation
            },
        });
    }

    const handleImageLoad = (project, imageType) => {

        if (project === 'peopixs') {
            if (imageType === 'webp') {
                setIsPeopixsWebPLoaded(true);
            } else if (imageType === 'avif') {
                setIsPeopixsAvifLoaded(true);
            }
        } else
            if (project === 'spline') {
                if (imageType === 'webp') {
                    setIsSplineWebPLoaded(true);
                } else if (imageType === 'avif') {
                    setIsSplineAvifLoaded(true);
                }
            }
            else
                if (project === 'mydev') {
                    if (imageType === 'webp') {
                        setIsMydevWebPLoaded(true);
                    } else if (imageType === 'avif') {
                        setIsMydevAvifLoaded(true);
                    }
                }
                else
                    if (project === 'snakes') {
                        if (imageType === 'webp') {
                            setIsSnakeWebPLoaded(true);
                        } else if (imageType === 'avif') {
                            setIsSnakeAvifLoaded(true);
                        }
                    }
    };

    useEffect(() => {
        const loadImage = async (imgURL) => {
            try {
                const response = await fetch(imgURL);
                const data = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "image/svg+xml");
                const svg = doc.querySelector("svg");
                const bg = doc.querySelector("#bg");
                const colorSkins = doc.querySelectorAll(".colorSKin");
                const colorOutline = doc.querySelector(".st7");
                bg.setAttribute("fill", svgAttributesBg);
                colorSkins.forEach(function (colorSkin) {
                    colorSkin.setAttribute("fill", svgAttributesSkin);
                });
                colorOutline.setAttribute("fill", svgAttributesOutline);

                setSvgImage(svg);
            } catch (error) {
                console.error("Error fetching SVG:", error);
            }
        };
        loadImage(svgProjectImg);
    }, [svgAttributesBg, svgAttributesSkin, svgAttributesOutline]);

    useEffect(() => {

        galleryLinks.forEach((link) => {
            const modalId = link.getAttribute('data-modal-id');
            const modalItem = modalData.find(item => item[lang].id === modalId);
            if (modalItem) {
                const modalContent = modalItem[lang];
                link.setAttribute('data-modal-title', modalContent.title);
                const truncatedContent = modalContent.content.substring(0, 120) + ' ...';
                if (!isMobile) {
                    link.setAttribute('data-modal-content', truncatedContent);
                } else {
                    link.setAttribute('data-modal-content', text.viewMore[lang]);
                }
            }
        });

        const renderedModalsArray = modalData.map((modalItem) => {
            if (modalItem[lang]) {
                let extension = null;
                if (modalItem[lang].imageSrc) {
                    const parts = modalItem[lang].imageSrc.split('.');
                    extension = parts[parts.length - 1];
                }

                const handleColorChangeBg = (event) => {
                    setSvgAttributesBg(event)
                };

                const handleColorChangeColorSkin = (event) => {
                    setSvgAttributesSkin(event)
                };

                const handleColorChangeColorOutline = (event) => {
                    setSvgAttributesOutline(event)
                };

                const handleSaveSvg = () => {
                    const svgString = new XMLSerializer().serializeToString(svgImage);
                    const blob = new Blob([svgString], { type: 'image/svg+xml' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'image.svg';
                    link.click();
                };

                return (
                    <div key={modalItem[lang].id} id={`${modalItem[lang].id}`} className="modal-overlay">
                        <button className='modal-close' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => closeModal(modalItem[lang].id)}><i className="fa-sharp fa-solid fa-xmark"></i></button>
                        <div className='modal-content'>
                            <div className='modal-flex-container'>
                                {modalItem[lang].id === 'modal-3' &&
                                    <div className='modal-image-container'>
                                        {svgImage && React.createElement('div', { dangerouslySetInnerHTML: { __html: svgImage.outerHTML } })}
                                    </div>
                                }
                                <div className='modal-text-container'>
                                    <h2 className='modal-title'>{modalItem[lang].title}</h2>
                                    <div className='modal-technologies'>
                                        <ul>
                                            {modalItem[lang].technologies.map((technology, index) => (
                                                <li key={index}>{technology}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className='modal-text' dangerouslySetInnerHTML={{ __html: modalItem[lang].content }} />
                                    {extension === 'svg' && (

                                        <div className='modal-picker'>
                                            <ul>
                                                <li>
                                                    <label htmlFor='colorPickerBg'>{text.sky[lang]}</label>
                                                    <input type="color" id='colorPickerBg' value={svgAttributesBg} onChange={(e) => handleColorChangeBg(e.target.value)} />
                                                </li>
                                                <li>
                                                    <label htmlFor='colorPickerColorSkin'>{text.skin[lang]}</label>
                                                    <input type='color' id='colorPickerColorSkin' value={svgAttributesSkin} onChange={(e) => handleColorChangeColorSkin(e.target.value)} />
                                                </li>
                                                <li>
                                                    <label htmlFor='colorPickerColorOutline'>{text.ground[lang]}</label>
                                                    <input type='color' id='colorPickerColorOutline' value={svgAttributesOutline} onChange={(e) => handleColorChangeColorOutline(e.target.value)} />
                                                </li>
                                            </ul>
                                            <button className='btn-svg' onClick={handleSaveSvg}>{text.saveSvg[lang]}</button>

                                        </div>
                                    )}
                                    {modalItem[lang].videoExplicationSrc && (
                                        <Fancybox
                                            options={{
                                                Carousel: {
                                                    // infinite: false,
                                                },
                                            }}
                                        >
                                            <div className="modal-explication-video">
                                                {modalItem[lang].videoExplicationSrc && modalItem[lang].videoExplicationSrc.map((videoSrc, index) => (
                                                    <a key={index} href={videoSrc} className="fancybox" data-fancybox={`gallery-video-modal`} data-sequence={index + 1}><i className="fa-solid fa-play" /></a>
                                                ))}
                                            </div>
                                        </Fancybox>
                                    )}

                                    {modalItem[lang].imgExplicationSrc && (
                                        <Fancybox
                                            options={{
                                                Carousel: {
                                                    // infinite: false,
                                                },
                                            }}
                                        >
                                            <div className="modal-explication-image">
                                                {modalItem[lang].imgExplicationSrc && modalItem[lang].imgExplicationSrc.map((imgSrc, index) => (
                                                    <a key={index} href={imgSrc} className="fancybox" data-fancybox={`gallery-img-modal`} data-caption={modalItem[lang].textExplicationSrc[index]} data-sequence={index + 1}><img width={'100px'} src={imgSrc} /></a>
                                                ))}
                                            </div>
                                        </Fancybox>
                                    )}

                                    {modalItem[lang].link && (
                                        <div className='modal-more'>
                                            <a href={modalItem[lang].link} target='_blank'>{text.link[lang]}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return null; // Return null for cases where no modal should be rendered
        });

        setRenderedModals(renderedModalsArray);

        modalTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const targetModalId = trigger.getAttribute('href').substring(1);
                openModal(targetModalId);
            });
        });



        const openModal = (modalId) => {
            const modal = document.getElementById(modalId);
            const modalBtnOpen = document.getElementsByClassName('modal-close');
            gsap.to(modalBtnOpen, { rotation: 0, scale: 1, duration: 0.1, ease: 'power2.out' });

            gsap.fromTo(
                modal,
                { y: "100vh" },
                { duration: 1, y: 0, ease: 'power2.out' }
            );
            modal.style.display = 'flex'; // Affichez la modal
        }

    }, [lang, svgImage]);

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
                opacity: 0,
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
                                <a href="#modal-1" className="modal-trigger" data-modal-id="modal-1" aria-label="Peopixs">
                                    {isMobile ? (
                                        <picture>
                                            {isPeopixsWebPLoaded ? (
                                                <source srcSet={peopixsMainWebP} type="image/webp" />
                                            ) : null}
                                            {isPeopixsAvifLoaded ? (
                                                <source srcSet={peopixsMainAvif} type="image/avif" />
                                            ) : null}
                                            <img src={peopixsMainJpg} alt="Peopixs" onLoad={() => handleImageLoad('peopixs', 'webp')} />
                                        </picture>
                                    ) : (
                                        <video autoPlay muted playsInline loop>
                                            <source src={peopixsMainVideo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#modal-2" className="modal-trigger" data-modal-id="modal-2" aria-label="Spline">
                                    {isMobile ? (
                                        <picture>
                                            {isSplineWebPLoaded ? (
                                                <source srcSet={splineMainWebP} type="image/webp" />
                                            ) : null}
                                            {isSplineAvifLoaded ? (
                                                <source srcSet={splineMainAvif} type="image/avif" />
                                            ) : null}
                                            <img src={splineMainJpg} alt="Spline" onLoad={() => handleImageLoad('spline', 'webp')}
                                            />
                                        </picture>
                                    ) : (
                                        <video autoPlay muted playsInline loop>
                                            <source src={splineVideo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#modal-3" className="modal-trigger" data-modal-id="modal-3" aria-label="SVG">
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
                                <a href="#modal-4" className="modal-trigger" data-modal-id="modal-4" aria-label="mydev">
                                    {isMobile ? (
                                        <picture>
                                            {isMydevWebPLoaded ? (
                                                <source srcSet={mydevMainWebP} type="image/webp" />
                                            ) : null}
                                            {isMydevAvifLoaded ? (
                                                <source srcSet={mydevMainAvif} type="image/avif" />
                                            ) : null}
                                            <img src={mydevMainJpg} alt="mydev" onLoad={() => handleImageLoad('mydev', 'webp')} />
                                        </picture>
                                    ) : (
                                        <video autoPlay muted playsInline loop>
                                            <source src={mydevMainVideo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a href="#modal-5" className="modal-trigger" data-modal-id="modal-5" aria-label="shop mydev">
                                    <img src={shopMydevtImg} alt="shop.mydev.fr" />
                                </a>
                            </li>
                            <li>
                                <a href="#modal-6" className="modal-trigger" data-modal-id="modal-6" aria-label="Snakes In Your Wallet">
                                    {isMobile ? (
                                        <picture>
                                            {isSnakeWebPLoaded ? (
                                                <source srcSet={snakeMainWebP} type="image/webp" />
                                            ) : null}
                                            {isSnakeAvifLoaded ? (
                                                <source srcSet={snakeMainAvif} type="image/avif" />
                                            ) : null}
                                            <img src={snakeMainJpg} alt="Snakes in your wallet" onLoad={() => handleImageLoad('snakes', 'webp')} />
                                        </picture>
                                    ) : (
                                        <video autoPlay muted playsInline loop>
                                            <source src={snakeMainVideo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
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
            <div id="modal-container">
                {renderedModals}
            </div>
        </>
    );
};

export default Work;