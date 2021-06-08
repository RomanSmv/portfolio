import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/components/title/Title";

/*
import Skill from "./Skill/Skill";
*/

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <form className={style.form}>
                    <input type="text" placeholder={"Your Name"} />
                    <input type="text" placeholder={"Your Email"}/>
                    <textarea placeholder={"Your Message"}/>

                    <button type='submit' className={style.submitBth}> send</button>
                </form>
            </div>


        </div>
    )
}


export default Contacts