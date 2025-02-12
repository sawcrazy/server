

import { useState ,useEffect } from 'react'
import {API} from './constants/api.js'
import './App.css'

export function App() {
    const [seminars, setSeminars] = useState([]);

    useEffect(() => {
            const fetchSeminars = async () => {
                const seminarsJson = await fetch(`${API.SEMINARS}`);
                const seminars = await seminarsJson.json();
                setSeminars(seminars);
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

