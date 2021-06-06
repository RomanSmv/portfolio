import React from 'react';
import style from './TeleWork.module.css';
import styleContainer from "../Common/Styles/Container.module.css";

function TeleWork() {
    return (
        <div className={style.TeleWork}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>

                <h3 className={style.remote}> Proposal remote job </h3>
                <a href='' className={style.buttonMe}>for me</a>

            </div>

        </div>
    )
}

export default TeleWork