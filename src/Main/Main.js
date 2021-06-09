import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';
import myPhoto from '../assest/image/myPhoto.jpg'

function Main() {
    const Me = {
        backgroundImage: `url(${myPhoto})`
    };
    return (
        <div className={style.mainBlock} id={"me"}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Roman Somov  </h1>
                    <p>Front-end Developer</p>
                </div>
                <div style={Me} className={style.photo}> </div>
            </div>

        </div>
    )
}

export default Main