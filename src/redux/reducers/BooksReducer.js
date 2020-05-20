import API from "../../services/API";

const SET_BOOK = 'SET_BOOK',
    TOGGLE_LOADING = 'TOGGLE_LOADING',
    ADD_SELECTED_BOOK = 'ADD_SELECTED_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    DEC_BOOK_COUNT = 'DEC_BOOK_COUNT';

const initialState = {
    books: [],
    loading: false,
    error: null,
    selectedBooks: []
};
//help functions-----
const updateCartItems = (array, item,index) => {

    if(index ===-1){
        return [
            ...array,
            item
        ]
    }
    if(item.count===0){
        return [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ]
    }

    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index + 1)
    ]
}

const updateCartItem = (book, item = {},addNewCount=1) => {
    const {
        id = book.id,
        count = 0,
        title = book.bookName,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + addNewCount,
        total: total + book.cost*addNewCount
    }
}
const getArrayWithoutId = (array, id) => array.filter((book) => book.id !== id)
//-------------------

const bookReducer = (state = initialState, action) => {
    const index = state.selectedBooks.findIndex((b) => b.id === action.id);;
    const bookInCard = state.selectedBooks[index];
    const book = state.books.find((b)=>b.id===action.id)
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_BOOK:
            return {
                ...state,
                books: [
                    ...state.books,
                    ...action.books
                ]
            }
        case ADD_SELECTED_BOOK:
            return {
                ...state,
                selectedBooks: updateCartItems(state.selectedBooks,updateCartItem(book,bookInCard),index)
            }

        case DELETE_BOOK:

            return {
                ...state,
                selectedBooks: [...getArrayWithoutId(state.selectedBooks, action.id)]
            }

        case DEC_BOOK_COUNT:
            return {
                ...state,
                selectedBooks: updateCartItems(state.selectedBooks,updateCartItem(book,bookInCard,-1),index)
            }
        default:
            return state;
    }
}


export default bookReducer;


//-----------------------AC-----------------------

export const setBookAC = (books) => ({type: SET_BOOK, books})
export const toggleLoading = () => ({type: TOGGLE_LOADING})
export const addSelectedBookAC = (id) => ({type: ADD_SELECTED_BOOK, id})
export const deleteSelectedBookAC = (id) => ({type: DELETE_BOOK, id});
export const decSelectedBookCounterAC = (id) => ({type: DEC_BOOK_COUNT, id});
//-----------------------TC-----------------------
export const getBookTC = () => async (dispatch) => {
    dispatch(toggleLoading());
    const result = await API.getBooks();
    if (result.length > 0) {
        dispatch(setBookAC(result));

    } else {
        alert('Произошла непредвиденная ошибка! Повторите попытку')
    }
    dispatch(toggleLoading());
}