import API from "../../services/API";

const SET_BOOK = 'SET_BOOK',
    TOGGLE_LOADING = 'TOGGLE_LOADING';


const initialState = {
    books:[],
    loading:false
};



const bookReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_BOOK:
            return {
                ...state,
                books:[
                    ...state.books,
                    ...action.books
                ]
            }
        default:
            return state;
    }
}


export default bookReducer;

export const setBookAC = (books)=>({type:SET_BOOK,books})
export const toggleLoading = ()=>({type:TOGGLE_LOADING})
export const getBookTC = ()=>async (dispatch)=>{
    dispatch(toggleLoading());
    const result =await API.getBooks();
    if(result.length>0){
        dispatch(setBookAC(result));

    }else {
        alert('Произошла непредвиденная ошибка! Повторите попытку')
    }
    dispatch(toggleLoading());
}