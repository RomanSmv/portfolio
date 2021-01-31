import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Skills </h2>
                <div className={style.skills}>
            <Skill title={"JS"} description={"dkm j22222 222ihv nsi dbsdh bvds hi"}/>
            <Skill title={"CSS"}  description={"dkmcj uh88 888 888hv nsid bsdh bvd shi"} />
            <Skill title={"React"} description={"55 55 5555  5555 5555 55"} />
                </div>
            </div>


        </div>
    )
}

export default Skills