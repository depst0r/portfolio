import './ErrorMessage.scss'

const ErrorMessage = ({error}) => {
    return (
        <div className="error">
            <div className="error__wrapper">
                <span className="error__message">{error}</span>
            </div>
        </div>
    )
}

export default ErrorMessage