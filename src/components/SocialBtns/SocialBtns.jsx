import React from 'react';
import './SocialBtns.scss';

const SocialBtns = () => {
    return (
        < div className='social'>
            <a href="https://github.com/Railrik/portfolio-vite" target="_blank" id="github-icon" aria-label="Projet GitHub de mon portfolio (Benjamin Ligny)"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/benjamin-ligny/" target="_blank" id="linkedin-icon" aria-label="Ma page Linkedin"><i className="fa-brands fa-linkedin-in" /></a>
            <a href="mailto:benjamin@ligny.pro" target="_blank" id="email-icon" aria-label="Contactez moi par E-mail"><i className="fa-solid fa-at" /></a>
        </div>
    );
};

export default SocialBtns;