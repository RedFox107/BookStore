const ADD_SELECTED_BOOK = 'ADD_SELECTED_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    DEC_BOOK_COUNT = 'DEC_BOOK_COUNT';

const initialState = {
    selectedBooks: []
};

const selectedBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SELECTED_BOOK:
            const index = state.selectedBooks.findIndex((book) => book.id === action.id)
            let resultArray = [
                ...state.selectedBooks,
                {id: action.id, count: 1}
            ];
            if (index >= 0) {
                resultArray = [
                    ...state.selectedBooks.slice(0, index),
                    {
                        ...state.selectedBooks[index],
                        count: state.selectedBooks[index].count + 1
                    },
                    ...state.selectedBooks.slice(index + 1)
                ]

            }
            return {
                ...state,
                selectedBooks: resultArray
            }
            break;
        case DELETE_BOOK:
            return {
                ...state,
                selectedBooks: [
                    ...state.selectedBooks.filter((book) => book.id !== action.id)
                ]
            }
            break;
        case DEC_BOOK_COUNT:
            const ind_dec = state.selectedBooks.findIndex((book) => book.id === action.id)
            let selectedBook = []
            if (state.selectedBooks[ind_dec].count - 1 === 0) {
                selectedBook = state.selectedBooks.filter((book) => book.id !== action.id)
            } else {
                selectedBook = [...state.selectedBooks.slice(0, ind_dec),
                    {
                        ...state.selectedBooks[ind_dec],
                        count: state.selectedBooks[ind_dec].count - 1
                    },
                    ...state.selectedBooks.slice(ind_dec + 1)]
            }

            return {
                ...state,
                selectedBooks: selectedBook
            }
            break;
        default:
            return state;
            break;
    }
}

export default selectedBookReducer;


//AC - action creator
//TC - thunk creator
export const addSelectedBookAC = (id) => ({type: ADD_SELECTED_BOOK, id})
export const deleteSelectedBookAC = (id) => ({type: DELETE_BOOK, id});
export const decSelectedBookCounterAC = (id) => ({type: DEC_BOOK_COUNT, id});
