import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';
import myPhoto from '../assest/image/myPhoto.jpg'
import Particles from "react-particles-js";

const ParticlesOpt ={
    "particles":{
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        'move': {
            'speed': 2,
            'bounce': true
        }
    },
}


function Main() {
    const Me = {
        backgroundImage: `url(${myPhoto})`
    };
    return (
        <div className={style.mainBlock} id={"me"}>
            <Particles className={style.particles} params={ParticlesOpt}/>
            <div className={`${styleContainer.container} + ${style.wrapper}`}>
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