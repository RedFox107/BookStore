import React from "react";
import s from './Order.module.css';
import {connect} from "react-redux";
import {
    addSelectedBookAC,
    decSelectedBookCounterAC,
    deleteSelectedBookAC
} from "../../redux/reducers/BooksReducer";
import photo from './../../images/credit-card.svg'



const SelectedItem = ({book, ...props}) => {
    return (
        <div className={s.item}>
            <div>{props.index+1}</div>
            <div>{book.title}</div>
            <div>{book.count}</div>
            <div>${book.total}</div>
            <div>
                <button onClick={props.addBook}>+</button>
                <button onClick={props.decBook}>-</button>
                <button onClick={props.delBook}>(--)</button>
            </div>
        </div>
    )
}

const Order = ({selectedBooks,fullPrice, ...props}) => {
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

                        addBook={() => {
                            props.addSelectedBookAC(b.id)
                        }}
                        decBook={() => {
                            props.decSelectedBookCounterAC(b.id)
                        }}
                        delBook={() => {
                            props.deleteSelectedBookAC(b.id)
                        }}

                        book={b}
                        key={b.id}/>
                }
            )}
            <div className={s.checkout}>
                <p>Total: ${fullPrice}</p>
                <button><img alt={'some img'} src={photo}/>Checkout</button>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    selectedBooks: state.books.selectedBooks,
    fullPrice:state.books.fullPrice
})

export default connect(mapStateToProps, {
    addSelectedBookAC,
    deleteSelectedBookAC,
    decSelectedBookCounterAC
})(Order)

