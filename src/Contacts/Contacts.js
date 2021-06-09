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
            <form
                action="https://formspree.io/f/xleanegg"
                method="POST"
            >
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts Me"}/>

                <form className={style.form}>
                    <input type="text" placeholder={"Your Name"} />
                    <input type="text" placeholder={"Your Email"}/>
                    <textarea placeholder={"Your Message"}/>

                    <button type='submit' className={style.submitBth}> send</button>
                </form>

            </div>
            </form>


        </div>
    )
}


export default Contacts