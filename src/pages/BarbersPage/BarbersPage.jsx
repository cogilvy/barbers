import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import * as apptAPI from '../../utilities/appointments-api';


export default function BarberPage() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    async function fetchBarbers() {
      const fetchedBarbers = await apptAPI.getBarbers()
      setBarbers(fetchedBarbers)
    }
    fetchBarbers()
  }, [])
  
  return(
    <div>
      <h1>Select a Barber to Make an Appointment!</h1>
      {
        barbers && barbers.map(barber => (
          <Link to={{pathname: "/appointments/new", state: {barber: barber}}}>
            <div>
              {barber.name}
            </div>
          </Link>
        ))
      }
    </div>
  );
}