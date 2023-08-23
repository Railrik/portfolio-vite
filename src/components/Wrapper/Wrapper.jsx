import React from 'react';
import './Wrapper.scss';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Progress />
            <Logo />
            <Nav />
        </div>
    );
};

export default Wrapper;
