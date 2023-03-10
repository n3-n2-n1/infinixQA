import React from "react";
import style from './Buttons.module.css';

const CTA1 = () => {

    return(
        <div className={style.cta1Cont}>
            <button className={style.ctaBtn1}>
                <a> Contact Us</a>                
            </button>
        </div>
    )
}


export default CTA1;