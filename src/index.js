import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter, Routes ,Route, Navigate} from 'react-router-dom';
import { getRoutines } from './api';
import { Header, Routines, Activities, LoginRegister} from './Components';
const App = ()=> {

  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  

  useEffect(()=>{
    getRoutines(setRoutines);
    
  },[routines])

  

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Header token={token}/>
      <div className='main'>
      {
        <Routes>
          <Route path = '/signIn' element={<LoginRegister user={user} setUser={setUser} token={token} setToken={setToken} />}/>
          <Route path='/routines' element={<Routines routines={routines}/>}/>
          <Route path ='/activities' element={<Activities activities={activities} setActivities={setActivities}/>}/>
          <Route path='/' element={<Navigate to="/routines"/> /*makes the routines page default for now.*/}/>
        </Routes>
      }
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
