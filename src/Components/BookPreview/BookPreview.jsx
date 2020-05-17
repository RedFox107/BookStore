import React, {useEffect} from "react";
import s from './BookPreview.module.css';
import {connect} from "react-redux";
import {addSelectedBookAC} from "../../redux/reducers/selectedBookReducer";
import {getBookTC} from "../../redux/reducers/BooksReducer";

const Book = ({cost, author, bookName, photoUrl,id,...props}) => {

    return (
        <div className={s.book}>
            <div>
                <img src={photoUrl} alt={'some img'}/>
            </div>
            <div className={s.aboutBook}>
                <div>
                    <p>{bookName}</p>
                    <p>by {author}</p>
                    <h2>${cost}</h2>
                </div>
                <button onClick={props.addBook}>Add to Cart</button>
                {/*<button onClick={()=>props.getBookTC()}>Get Book</button>*/}
            </div>
        </div>
    )
}

const BookContainer = ({books,...props})=>{
    useEffect(()=>{
        props.getBookTC();
    },[])
    const {addSelectedBookAC} = props;
    const addBook = (id)=>{
        //debugger
        addSelectedBookAC(id);
    }
    return (
        <div className={s.baseBlock}>
            {books.map((b)=>(<Book key={b.id} {...b} addBook={()=>{addBook(b.id)}}/>))}

        </div>
    )
}




const mapStateToProps = (state)=>({
    books:state.books.books,
})



export default connect(mapStateToProps,{addSelectedBookAC,getBookTC})(BookContainer);