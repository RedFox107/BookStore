import React from "react";
import cart from '../../images/shoppingCart.svg';
import s from './Header.module.css';
import {connect} from "react-redux";



const HeaderContainer = ({quantity,price})=>{

    return (
        <>
        <Header numItems={quantity} cost={price}/>
        </>
    )
}

const Header = ({numItems=0,cost=0})=>{
    return (
        <div className={s.wrap}>
            <div className={s.leftHeader}>
                <h1>ReStore</h1>
            </div>
            <div className={s.rightHeader}>
                <img src={cart} alt={'img'}/>
                <span>{numItems} items (${cost})</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    quantity:state.selectedBooks.quantity,
    price:state.selectedBooks.fullPrice
})

export default connect(mapStateToProps)(HeaderContainer);

