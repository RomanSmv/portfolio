import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/components/title/Title";

/*
import Skill from "./Skill/Skill";
*/

function FooterDown() {
    return (
        <div className={style.downBlock}>
            <div className={`${styleContainer.container} ${style.downContainer}`}>
                <Title text={"Roman Somov"}/>
                <div className={style.socialIcons}>
                    <a href="https://t.me/khazady" className={style.socialIcon}></a>
                    <a href="tel:+375255434784" className={style.socialIcon}>
                    </a>
                    <a href="https://www.linkedin.com/in/romansmv" className={style.socialIcon}>
                    </a>
                </div>
                    <span className={style.copyright}> 2021 All rights reserved</span>

            </div>

        </div>
    )
}

export default FooterDown