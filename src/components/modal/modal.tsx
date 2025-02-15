import s from './style.module.css';
import {ModalProps} from "./modal.props.ts";

export const Modal: React.FC<ModalProps> = ({ open, onClick, title, children }) =>{
    if(!open){
        return null;
    }
    return (
        <div className={s.modal}>
            <div className= {s.modal__widow}>
                <div className={s.modal__title}>
                    <button className={s.modal_button_close} onClick={onClick} > </button>
                    <div>
                        <h1>{title}</h1>
                    </div>
                </div>
                {children}
            </div>

        </div>
    )
}