import {Modal} from "../components/modal/modal.tsx";
import {Button} from "../components/button/Button.tsx";
import {ModalDeleteProps} from "./modalDelete.props.ts";

export const ModalDelete: React.FC<ModalDeleteProps> = ({ open, title, onClose, delete: deleteHandler, id }) => {
    return (
        <Modal open={open} title={title}>
            <Button onClick={onClose}>Отмена</Button>
            <Button onClick={() => deleteHandler(id!)}>Удалить</Button>
        </Modal>
    );
};