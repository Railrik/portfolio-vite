import React from 'react';
import "./Wrapper.scss";
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Progress />
            <Logo />
        </div>

    );
};

export default Wrapper;
