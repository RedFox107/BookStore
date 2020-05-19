import React from 'react';
import './App.css';
import withErrorBoundary from "./Components/HOCs/withErrorBoundary";
import HeaderContainer from "./Components/Header/Header";
import BookContainer from "./Components/BookPreview/BookPreview";
import Order from "./Components/Order/Order";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {getBookTC} from "./redux/reducers/BooksReducer";


class App extends React.Component {
    componentDidMount() {
        this.props.getBookTC()
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <Switch>
                    <Route path={'/bookGallery/:bookId?'} render={() => <BookContainer/>}/>
                    <Route path={'/order'} render={() => <Order/>}/>
                    <Route path={'/'} render={() => (<Redirect to={'/bookGallery/'}/>)}/>
                </Switch>

            </div>
        );
    }
}

const mSTP =(state)=>({

})

export default connect(mSTP,{getBookTC})(withErrorBoundary(App));





