import {Modal} from "./modal.tsx";
import {Button} from "../button/Button.tsx";

export const ModalDelete = (props) =>{
    return (
        <Modal open={props.open} title = {props.title}>
            <Button onClick={props.onClose}>
                Отмена
            </Button>
            <Button onClick={()=>props.delete(id)}>
                удалить
            </Button>
        </Modal>
    )
}