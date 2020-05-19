import React from "react";
import {connect} from "react-redux";
import Loader from "../common/Loader/withLoading";

const withLoading = (WrappedComponent) => {
    const loader = ({loading, ...props}) => {
        return (
            <>
                <WrappedComponent {...props}/>
                {loading&&<Loader loading={loading}/>}
            </>
        )

    }
    const mapStateToProps = (state) => ({
        loading: state.books.loading
    })
    return connect(mapStateToProps)(loader)
}

export default withLoading;