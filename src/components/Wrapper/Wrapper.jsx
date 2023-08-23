import React from 'react';
import './Wrapper.scss';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import GithubBtn from '../Github-btn/GithubBtn';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Progress />
            <Logo />
            <Nav />
            <GithubBtn />
        </div>
    );
};

export default Wrapper;
