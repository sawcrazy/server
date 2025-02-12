

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
        return(
            <div>
                HELLO {seminars[0].id}
            </div>
        )
    }

  return (
      <div>
          <h1>
              TEST
          </h1>

      </div>
  )
}

