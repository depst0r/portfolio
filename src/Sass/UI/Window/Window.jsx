
import './Window.scss'

const Window = ({children, className}) => {
    <div className={`windod ${className || ''}`.trim()}>
        {children}
    </div>
}

export default Window