import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import MyAppointments from '../MyAppointments/MyAppointments';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/barbers">
              <AppointmentForm />
            </Route>
            <Route path="/myappointments/new">
              <MyAppointments />
            </Route>
            <Redirect to="/barbers" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
