import img from './../../images/someTestBook.jpg';
import API from "../../services/API";

const SET_BOOK = 'SET_BOOK';


const initialState = {
    books:[
        {
            id: 0,
            bookName: 'TestBookName',
            author: 'SomeAuthor',
            cost: 300,
            photoUrl: img
        }
    ]
};



const bookReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                books:[
                    ...state.books,
                    ...action.books
                ]
            }
            break;
        default:
            return state;
            break;
    }
}


export default bookReducer;

export const setBookAC = (books)=>({type:SET_BOOK,books})
export const getBookTC = ()=>async (dispatch)=>{

    const result =await API.getBooks();
    if(result.length>0)
        dispatch(setBookAC(result))
}