import {combineReducers,createStore} from "redux";
import bookReducer from "./reducers/BooksReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    books:bookReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;