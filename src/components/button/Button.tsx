import {IButton} from "./button.props.ts";
import s from './style.module.css';



export const Button: React.FC<IButton> = ({onClick, children,}) => {
    return (
        <button className={s.button} onClick={onClick}>
            {children}
        </button>
    )
}