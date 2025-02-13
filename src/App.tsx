import { useState ,useEffect } from 'react';
import {ISeminars} from '../common/types/seminars.ts';
import {API} from './constants/api.ts';
import './App.css'
import {Card} from "./components/card/Card.tsx";
import {ModalDelete} from "./components/modal/modalDelete.tsx";
import {ModalEdit} from "./components/modal/modalEdit.tsx";

export function App() {
    const [seminars, setSeminars] = useState<ISeminars[]>([]);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [seminarId, setSeminarId] = useState<string | null>(null);

    useEffect(() => {
            const fetchSeminars = async () => {
                const seminarsJson = await fetch(`${API.SEMINARS}`);
                const seminars = await seminarsJson.json();
                setSeminars(seminars as ISeminars[]);
            };

            fetchSeminars();
        },
        []
    );

    const renderSeminars = () => {
        if (seminars.length === 0) {
            return <div>
                <h1>
                    LOGIN DE SEMINARS
                </h1>
            </div>
        }
        return seminars.map((item) => {
            return (
                <Card
                    key={item.id}
                    seminars={item}
                    ClickDelete={openModalDelete}
                    ClickEdit={openModalEdit}
                />
            )
        })

    }
    const deleteSeminars = async (id: string) => {
        await fetch(`${API.SEMINARS}${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        const seminarsJson = await fetch(`${API.SEMINARS}`);
        const newSeminars = await seminarsJson.json();
        setSeminars(newSeminars);
    };
    const openModalDelete = () =>{
        setOpenDelete(true);
    }
    const openModalEdit = (id:string) =>{
        setSeminarId(id)
        setOpenEdit(true);

    }
    // Функция для сохранения изменений
    const handleSave = async (editedSeminar) => {
            // Отправляем изменённые данные на сервер
            await fetch(`${API.SEMINARS}${editedSeminar.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedSeminar),
            });

        const seminarsJson = await fetch(`${API.SEMINARS}`);
        const newSeminars = await seminarsJson.json();
        setSeminars(newSeminars);
    };


  return (
      <div>
          <h1>
              TEST
          </h1>
          {renderSeminars()}
          <ModalDelete
              open={openDelete}
              onClose={()=>setOpenDelete(false)}
              title='Вы действительно хотите удалить элимент'
              delete={deleteSeminars}
          />
          <ModalEdit
          open={openEdit}
          onClose={()=>setOpenEdit(false)}
          seminar={seminars.find(seminar => seminar.id === seminarId)}
          title='Внесите изменения'
          onSave={handleSave}
          />
      </div>
  )
}

