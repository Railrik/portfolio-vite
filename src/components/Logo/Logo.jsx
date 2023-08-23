import React from 'react';
import logo from '../../assets/img/logo.png';
import './Logo.scss';
const Logo = () => {
    return (
        <div className="logo" id="return-home">
            <img src={logo} alt="logo" id="logo" />
        </div>

    );
};

export default Logo;