import { useState ,useEffect } from 'react';
import {ISeminars} from '../common/types/seminars.ts';
import {API} from './constants/api.ts';
import './App.css'

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
        console.log(seminars[0].date);
    }

  return (
      <div>
          <h1>
              TEST
          </h1>
          {renderSeminars()}

      </div>
  )
}

