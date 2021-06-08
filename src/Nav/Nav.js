import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Главное </a>
            <a href="">Скилы </a>
            <a href="">Проекты </a>
            <a href="">Контакты </a>
        </div>
    )
}

export default Nav