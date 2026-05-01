
import './Window.scss'

const Window = ({children, className}) => {
    return (
    <div className={`window ${className || ''}`.trim()}>
        {children}
    </div>
    )
}

export default Window