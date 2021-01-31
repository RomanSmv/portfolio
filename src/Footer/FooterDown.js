import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../Common/Styles/Container.module.css";
/*
import Skill from "./Skill/Skill";
*/

function FooterDown() {
    return (
        <div className={style.downBlock}>
            <div className={`${styleContainer.container} ${style.downContainer}`}>
                <h2 className={style.title}>Roman Somov</h2>
                <div className={style.block}>
                </div>
                <span> 2021 все права защищены</span>
            </div>


        </div>
    )
}

export default FooterDown