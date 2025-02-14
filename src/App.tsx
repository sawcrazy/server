import {useState, useEffect, useCallback, useMemo} from 'react';
import {ISeminars} from '../common/types/seminars.ts';
import {fetchSeminars, deleteSeminar, editSeminar} from './api/seminars.api';
import {Card} from "./components/card/Card.tsx";
import {ModalDelete} from "./modals/modalDelete.tsx";
import {ModalEdit} from "./modals/modalEdit.tsx";

export function App() {
    const [seminars, setSeminars] = useState<ISeminars[]>([]);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [seminarId, setSeminarId] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const seminars = await fetchSeminars();
            setSeminars(seminars);
        };
        fetchData();
    }, []);
    const selectedSeminar = useMemo(() => {
        return seminars.find(seminar => seminar.id === seminarId);
    }, [seminars, seminarId]); // Зависимости: seminars и seminarId

    const handleDelete = useCallback(async (id: string) => {
        const newSeminars = await deleteSeminar(id);
        setSeminars(newSeminars);
        setOpenDelete(false);
    }, []);

    const handleSave = useCallback(async (editedSeminar: ISeminars) => {
        const newSeminars = await editSeminar(editedSeminar);
        setSeminars(newSeminars);
        setOpenEdit(false);
    }, []);

    const openModalDelete = useCallback((id: string) => {
        setSeminarId(id);
        setOpenDelete(true);
    }, []);

    const openModalEdit = useCallback((id: string) => {
        setSeminarId(id);
        setOpenEdit(true);
    }, []);

    const renderSeminars = () => {
        if (seminars.length === 0) {
            return <div><h1>LOADING</h1></div>;
        }
        return seminars.map((item) => (
            <Card
                key={item.id}
                seminars={item}
                onClickDelete={openModalDelete}
                onClickEdit={openModalEdit}
            />
        ));
    };

    return (
        <div>
            <h1>Список семинаров</h1>
            {renderSeminars()}
            <ModalDelete
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                title='Вы действительно хотите удалить элемент?'
                delete={handleDelete}
                id={seminarId}
            />
            <ModalEdit
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                seminar={selectedSeminar}
                title='Внесите изменения'
                onSave={handleSave}
            />
        </div>
    );
}