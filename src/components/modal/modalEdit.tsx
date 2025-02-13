import {Modal} from "./modal.tsx";
import {Button} from "../button/Button.tsx";
import s from "../card/style.module.css";

export const ModalEdit = (props) =>{
    return (
        <Modal open={props.open} title={props.title}>
            <div className={s.list}>
                <dl className={s.holiday}>
                    <dt>Название семинара</dt>
                    <dd><input type="text" placeholder="text"/></dd>
                    <dt>Описание</dt>
                    <dd><input type="text" placeholder="text"/></dd>
                    <dt>Дата проведение</dt>
                    <dd><input type="text" placeholder="text"/></dd>
                    <dt>Время проведение семинара</dt>
                    <dd><input type="text" placeholder="text"/></dd>
                    <dt>Фото</dt>
                    <dd><input type="text" placeholder="text"/></dd>
                </dl>
            </div>
            <Button onClick={props.onClose}>
                Отмена
            </Button>
            <Button onClick={() => props.delete(id)}>
                удалить
            </Button>
        </Modal>
    )
}