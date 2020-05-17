import React from "react";
import s from './Order.module.css';
import {connect} from "react-redux";
import {
    addSelectedBookAC,
    decSelectedBookCounterAC,
    deleteSelectedBookAC
} from "../../redux/reducers/selectedBookReducer";

const SelectedItem = ({count, price, ...props}) => {
    return (
        <div className={s.item}>
            <div>{props.index+1}</div>
            <div>SomeBookName</div>
            <div>{count}</div>
            <div>${count * price}</div>
            <div>
                <button onClick={props.addBook}>+</button>
                <button onClick={props.decBook}>-</button>
                <button onClick={props.delBook}>(--)</button>
            </div>
        </div>
    )
}

const Order = ({books, selectedBooks, ...props}) => {
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
                    if(b.count===0){
                        props.deleteSelectedBookAC(b.id)
                        return null;
                    }
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
                        price={books.filter((bookInfo) => bookInfo.id === b.id)[0].cost}
                        key={b.id}/>
                }
            )}
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