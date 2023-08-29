import React, { useRef, useEffect } from 'react';
import logoImage from '../../assets/img/logo.png';
import './Logo.scss';

const Logo = () => {
    const logoRef = useRef(null);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const logoElement = logoRef.current;
        logoElement.addEventListener('click', handleClick);

        return () => {
            logoElement.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="logo" ref={logoRef} onClick={handleClick}>
            <img src={logoImage} alt="logo" id="logo" />
        </div>
    );
};

export default Logo;
