import React from "react";
import s from './Order.module.css';
import {connect} from "react-redux";

const Order = (props)=>{
    return (
        <div>
            <div className={s.item}>
                <div>#</div>
                <div>Item</div>
                <div>Count</div>
                <div>Price</div>
                <div>Actions</div>
            </div>
            <SelectedItem/>
        </div>

    )
}

const SelectedItem = (props)=>{
    return (
        <div className={s.item}>
            <div>1</div>
            <div>SomeBookName</div>
            <div>2</div>
            <div>$40</div>
            <div>
                <button>+</button>
                <button>-</button>
                <button>(--)</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    
}


export default connect(mapStateToProps)(Order)