import React from 'react';
import logo from '../../assets/img/logo.png';
import "./Wrapper.scss";

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Wrapper;
