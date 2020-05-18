import React, {useEffect} from "react";
import s from './BookPreview.module.css';
import {connect} from "react-redux";
import {addSelectedBookAC} from "../../redux/reducers/selectedBookReducer";
import {getBookTC} from "../../redux/reducers/BooksReducer";
import {Link, NavLink, withRouter} from "react-router-dom";

const Book = ({cost, author, bookName, photoUrl, id, ...props}) => {

    return (
        <div className={s.book}>
            <div>
                <img src={photoUrl} alt={'some img'}/>
            </div>
            <div className={s.aboutBook}>
                <div>
                    <p><Link to={`${id}`}>{bookName}</Link></p>
                    <p>by {author}</p>
                    <h2>${cost}</h2>
                </div>
                <button onClick={props.addBook}>Add to Cart</button>
            </div>
        </div>
    )
}

const FullBookInfo = (props) => {
    //debugger
    return (
        <div>
            <Book {...props.book} addBook={props.addBook}/>
            <div>Some info about this book</div>
        </div>
    )
}

const BookContainer = ({getBookTC,books, match, addSelectedBookAC, ...props}) => {
    //hooks

    //const
    const bookId = +match.params.bookId;

    if (!isNaN(bookId)) {
        const book = books.filter((b) => b.id === bookId)[0];
        return <FullBookInfo book={book} addBook={() => {
            addSelectedBookAC(bookId)
        }}/>
    }

    return (
        <>
            <div className={s.baseBlock}>
                {
                    books.map((b) => (<Book key={b.id} {...b} addBook={() => {
                        addSelectedBookAC(b.id)
                    }}/>))
                }

            </div>
            <div>
                <button onClick={()=>{getBookTC()}}>Next books</button>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    books: state.books.books
})


export default withRouter(connect(mapStateToProps, {addSelectedBookAC, getBookTC})(BookContainer));