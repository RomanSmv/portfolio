import React from 'react';
import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skill}>
            <h3>{props.title} </h3>
            <img src={props.source} className={style.icon}/>
            <span className={style.description}>{props.description} </span>
        </div>
    )
}

export default Skill