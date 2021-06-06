import React from 'react';
import style from './Footer.module.css';
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
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}> 2021 все права защищены</span>
            </div>


        </div>
    )
}

export default FooterDown