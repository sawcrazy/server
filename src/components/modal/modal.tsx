import s from './style.module.css';

export const Modal = (props) =>{
    if(!props.open){
        return null;
    }
    return (
        <div className={s.modal}>
            <div className= {s.modal__widow}>
                <div className={s.modal__title}>
                    <button className={s.modal_button_close} onClick={props.onClick} > </button>
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                </div>
                {props.children}
            </div>

        </div>
    )
}