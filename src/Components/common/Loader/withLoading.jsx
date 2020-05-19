import React from "react";
import s from './withLoading.module.css';

const Loader = (props) => {
    return (
        <div className={s.center}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;