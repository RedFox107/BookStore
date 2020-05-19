import React from "react";
import s from './Order.module.css';
import {connect} from "react-redux";
import {
    addSelectedBookAC,
    decSelectedBookCounterAC,
    deleteSelectedBookAC
} from "../../redux/reducers/selectedBookReducer";
import photo from './../../images/credit-card.svg'



const SelectedItem = ({count, bookInfo, ...props}) => {
    return (
        <div className={s.item}>
            <div>{props.index+1}</div>
            <div>{bookInfo.bookName}</div>
            <div>{count}</div>
            <div>${count * bookInfo.cost}</div>
            <div>
                <button onClick={props.addBook}>+</button>
                <button onClick={props.decBook}>-</button>
                <button onClick={props.delBook}>(--)</button>
            </div>
        </div>
    )
}

const Order = ({books, selectedBooks, ...props}) => {
    let price = 0;
    selectedBooks.reduce((prevValue, item) => {
        price += item.count * books[books.findIndex((b) => b.id === item.id)].cost
        return prevValue + item.count
    }, 0)
    return (
        <div>
            <div className={s.item}>
                <div>#</div>
                <div>Item</div>
                <div>Count</div>
                <div>Price</div>
                <div>Actions</div>
            </div>
            {selectedBooks.map(
                (b,index) => {

                    return <SelectedItem

                        index={index}
                        count={b.count}
                        addBook={() => {
                            props.addSelectedBookAC(b.id)
                        }}
                        decBook={() => {
                            props.decSelectedBookCounterAC(b.id)
                        }}
                        delBook={() => {
                            props.deleteSelectedBookAC(b.id)
                        }}
                        bookInfo={books.filter((bookInfo) => bookInfo.id === b.id)[0]}
                        key={b.id}/>
                }
            )}
            <div className={s.checkout}>
                <p>Total: ${price}</p>

                <button><img src={photo}/>Checkout</button>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    selectedBooks: state.selectedBooks.selectedBooks,
    books: state.books.books
})

export default connect(mapStateToProps, {
    addSelectedBookAC,
    deleteSelectedBookAC,
    decSelectedBookCounterAC
})(Order)

