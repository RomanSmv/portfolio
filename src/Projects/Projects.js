import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../Common/Styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../Common/components/title/Title";
import todoImage from "../assest/image/ToDoList.png"
import socialImage from "../assest/image/SocialNetwork.png"

function Projects() {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={todo} title={"To Do List"}  description={"dkm j22222 222ihv nsi dbsdh bvds hi"}/>
                    <Project style={social} title={"Social Network"}  description={"dkmcj uh88 888 888hv nsid bsdh bvd shi"} />

                </div>
            </div>


        </div>
    )
}

export default Projects