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
        <div className={style.projectsBlock} id={"projects"}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={todo} href={"https://romansmv.github.io/ToDlist/"} title={"To Do List"}  description={""}/>
                    <Project style={social} href={"https://romansmv.github.io/ReactVidos-SS/#/profile"} title={"Social Network"}  description={""} />

                </div>
            </div>


        </div>
    )
}

export default Projects