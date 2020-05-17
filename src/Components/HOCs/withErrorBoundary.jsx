import React from 'react';

const withErrorBoundary = WrappedComponent => class WithError extends React.Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {

        this.setState(
            {
                error: true
            }
        )
    }

    render() {
        return (this.state.error) ? <ErrorIndicator/> : <WrappedComponent {...this.props}/>
    }
}

const ErrorIndicator = () => {
    return (
        <div>
            Ошибка!Перезагрузите страницу и попробуйте снова!
        </div>
    )
}

export default withErrorBoundary;