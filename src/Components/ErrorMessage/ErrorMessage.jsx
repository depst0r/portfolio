import './ErrorMessage.scss'

export const ErrorMessage = ({error}) => {
    return (
        <div className="error">
            <div className="error__wrapper">
                <span className="error__message">{error}</span>
            </div>
        </div>
    )
}
