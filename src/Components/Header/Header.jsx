import React from "react";
import cart from '../../images/shoppingCart.svg';
import s from './Header.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


const HeaderContainer = ({books, selectedBooks}) => {
    let price = 0;
    const quantity = selectedBooks.reduce((prevValue, item) => {
        price += item.count * books[books.findIndex((b) => b.id === item.id)].cost
        return prevValue + item.count
    }, 0)

    return (
        <>
            <Header numItems={quantity} cost={price}/>
        </>
    )
}

const Header = ({numItems = 0, cost = 0}) => {
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
                    <span>{numItems} items (${cost})</span>
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.books.books,
    selectedBooks: state.books.selectedBooks
})

export default connect(mapStateToProps)(HeaderContainer);

