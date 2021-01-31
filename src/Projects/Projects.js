import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../Common/Styles/Container.module.css";
import Project from "./Project/Project";
/*
import Skill from "./Skill/Skill";
*/

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects </h2>
                <div className={style.projects}>
                    <Project title={"Name Project"} description={"dkm j22222 222ihv nsi dbsdh bvds hi"}/>
                    <Project title={"Name Project1"}  description={"dkmcj uh88 888 888hv nsid bsdh bvd shi"} />

                </div>
            </div>


        </div>
    )
}

export default Projects