import {useState, useEffect} from "react";
import {Modal} from "../components/modal/modal.tsx";
import {Button} from "../components/button/Button.tsx";
import s from "../components/card/style.module.css";


export const ModalEdit = (props) =>{
    const { open, onClose, title, seminar,onSave } = props;

    if (!seminar) {
        return null;
    }
    const [editedSeminar, setEditedSeminar] = useState(seminar);
    useEffect(() => {
        setEditedSeminar(seminar);
    }, [seminar]);


    const handleChange = (field, value) => {
        setEditedSeminar({
            ...editedSeminar,
            [field]: value,
        });
    };


    const handleSave = () => {
        onSave(editedSeminar);
        onClose();
    };

    return (
        <Modal open={open} title={title}>
            <div className={s.list}>
                <dl className={s.holiday}>
                    <dt>Название семинара</dt>
                    <dd>
                        <input
                            type="text"
                            value={editedSeminar.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                    />
                    </dd>
                    <dt>Описание</dt>
                    <dd>
                        <input
                            type="text"
                            value={editedSeminar.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </dd>
                    <dt>Дата проведение</dt>
                    <dd>
                        <input
                            type="text"
                            value={editedSeminar.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                        />
                    </dd>
                    <dt>Время проведение семинара</dt>
                    <dd>
                        <input
                            type="text"
                            value={editedSeminar.time}
                            onChange={(e) => handleChange('time', e.target.value)}
                        />
                    </dd>
                    <dt>Фото</dt>
                    <dd>
                        <input
                            type="text"
                            value={editedSeminar.photo}
                            onChange={(e) => handleChange('photo', e.target.value)}
                        />
                    </dd>
                </dl>
            </div>
            <Button onClick={onClose}>
                Отмена
            </Button>
            <Button onClick={handleSave}>
                Сохранить
            </Button>
        </Modal>
    )
}