import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../Common/Styles/Container.module.css";
/*
import Skill from "./Skill/Skill";
*/

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts </h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea className={style.textArea}/>
                </form>
                <button> send</button>
            </div>


        </div>
    )
}

export default Contacts