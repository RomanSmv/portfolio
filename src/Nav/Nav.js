import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="#me">Main</a>
            <a href="#skills">Skills </a>
            <a href="#projects">Projects </a>
            <a href="#contacts">Contact Me </a>
        </div>

    )
}

export default Nav