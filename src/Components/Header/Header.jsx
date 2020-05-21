import React from "react";
import cart from '../../images/shoppingCart.svg';
import s from './Header.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


const HeaderContainer = ({fullPrice, totalCount}) => {

    return (
        <>
            <Header count={totalCount} fullPrice={fullPrice}/>
        </>
    )
}

const Header = ({count = 0, fullPrice = 0}) => {
    return (
        <div className={s.wrap}>
            <div className={s.leftHeader}>
                <NavLink to={'/'}>
                    <h1>ReStore</h1>
                </NavLink>
            </div>
            <div className={s.rightHeader}>
                <NavLink to={'/order'}>
                    <img src={cart} alt={'img'}/>
                    <span>{count} items (${fullPrice})</span>
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    fullPrice: state.books.fullPrice,
    totalCount:state.books.totalCount,
})

export default connect(mapStateToProps)(HeaderContainer);

