import React from 'react';
import './Wrapper.scss';
import Progress from '../Progress/Progress';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import GithubBtn from '../Github-btn/GithubBtn';
import Header from '../Header/Header';
import Lang from '../Lang/Lang';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Progress />
            <Logo />
            <Nav />
            <GithubBtn />
            <Header />
            <Lang />
        </div>
    );
};

export default Wrapper;
