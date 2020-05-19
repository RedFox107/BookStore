import {combineReducers,createStore} from "redux";
import bookReducer from "./reducers/BooksReducer";
import selectedBookReducer from "./reducers/selectedBookReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    books:bookReducer,
    selectedBooks:selectedBookReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;