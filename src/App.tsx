import { useState ,useEffect } from 'react';
import {ISeminars} from '../common/types/seminars.ts';
import {API} from './constants/api.ts';
import './App.css'
import {Card} from "./components/card/Card.tsx";

export function App() {
    const [seminars, setSeminars] = useState<ISeminars[]>([]);

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
                <Card key={item.id} seminars={item} deleteSeminars={deleteSeminars}/>
            )
        })

    }
    const deleteSeminars = async (id: string) => {
        await fetch(`${API.SEMINARS}/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
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

      </div>
  )
}

