import React from "react";
import s from './withLoading.module.css';

const Loader = ({loading}) => {
    if(!loading)return null;
    return (
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
    )
}

export default Loader;