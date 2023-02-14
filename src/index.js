import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter, Routes ,Route, Navigate} from 'react-router-dom';
import { getRoutines } from './api';
import { Header, Routines, Activities} from './Components';
const App = ()=> {

  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState("");

  useEffect(()=>{
    getRoutines(setRoutines);
    
  },[routines])

  

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Header />
      <div className='main'>
      {
        <Routes>
          <Route path='/routines' element={<Routines routines={routines}/>}/>
          <Route path ='/activities' element={<Activities activities={activities}/>}/>
          <Route path='/' element={<Navigate to="/routines"/> /*makes the routines page default for now.*/}/>
        </Routes>
      }
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
