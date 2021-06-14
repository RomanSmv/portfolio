import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/components/title/Title";

/*
import Skill from "./Skill/Skill";
*/

function Contacts() {
    return (
        <div className={style.contactsBlock} id="contacts">
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts Me"}/>

                <form action="https://formspree.io/f/xleanegg"
                      method="POST" className={style.form}>
                    <input type="text" placeholder={"Your Name"} name={"name"}/>
                    <input type="text" placeholder={"Your Email"} name={"email"}/>
                    <textarea placeholder={"Your Message"} name={"text"}/>

                    <button type='submit' className={style.submitBth}> send</button>
                </form>
            </div>
        </div>
    )
}


export default Contacts