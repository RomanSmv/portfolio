import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from "../Common/components/title/Title";
import html from "../assest/image/html.svg"
import css from "../assest/image/css.svg"
import js from "../assest/image/js.svg"
import react from "../assest/image/react.svg"

function Skills() {

    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill source={html} title={"HTML5"} description={"Semantic elements, Open Graph, data attributes, tables, template"}/>
                    <Skill source={css} title={"CSS"} description={"SASS & LESS, mixins, adaptive design, flex & grid, animations, Material UI, Ant Design"}/>
                    <Skill source={js} title={"JS"} description={"Event-loop, micro/macro tasks, prototypal inheritance, scope, promise"}/>
                    <Skill source={react} title={"React"} description={"Hooks, HOCs, Redux, React-Redux, Router, Thunk, Axios, Formik/Redux-Form"}/>

                </div>
            </div>


        </div>
    )
}

export default Skills