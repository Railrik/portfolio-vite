import React from 'react';
import './SocialBtns.scss';
import cv from '../../assets/pdf/cv.pdf'
const SocialBtns = () => {
    return (
        <div className='social'>
            <div className='social-column'>
                <a href="https://github.com/Railrik/" target="_blank" id="github-icon" aria-label="Projet GitHub de mon portfolio (Benjamin Ligny)"><i className="fa-brands fa-github" /></a>
                <a href="https://www.linkedin.com/in/benjamin-ligny/" target="_blank" id="linkedin-icon" aria-label="Ma page Linkedin"><i className="fa-brands fa-linkedin-in" /></a>
                <a href="mailto:benjamin@ligny.pro" target="_blank" id="email-icon" aria-label="Contactez moi par E-mail"><i className="fa-solid fa-at" /></a>
            </div>
            <div className='social-row'>
                <a href={cv} target="_blank" id="pdf-icon" aria-label="Télécharger le CV de Benjamin Ligny"><i className="fa-solid fa-file-pdf"></i></a>
            </div>
        </div>

    );
};

export default SocialBtns;