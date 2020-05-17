import React from 'react';
import './App.css';
import withErrorBoundary from "./Components/HOCs/withErrorBoundary";
import HeaderContainer from "./Components/Header/Header";
import BookContainer from "./Components/BookPreview/BookPreview";
import Order from "./Components/Order/Order";


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <BookContainer/>
            <Order/>

        </div>
    );
}

export default withErrorBoundary(App);





