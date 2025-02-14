import {Modal} from "../components/modal/modal.tsx";
import {Button} from "../components/button/Button.tsx";

export const ModalDelete = (props) =>{
    const { open, title, onClose, delete: deleteHandler, id } = props;
    return (
        <Modal open={open} title = {title}>
            <Button onClick={onClose}>
                Отмена
            </Button>
            <Button onClick={() => deleteHandler(id)}>
                удалить
            </Button>
        </Modal>
    )
}