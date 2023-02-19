import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter, Routes ,Route, Navigate} from 'react-router-dom';
import { getActivities, getRoutines, stayIn } from './api';
import { Header, Routines, Activities, LoginRegister, RoutineDetail, MyRouitines} from './Components';



const App = ()=> {

  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  

  useEffect(()=>{

    const getStuff = async() =>
    {
      const allRoutines = await getRoutines();
      setRoutines(allRoutines);

      const allActivities = await getActivities();
      setActivities(allActivities);
    }

    const checkLogin = async () =>{
      if(window.localStorage.getItem("token"))
      {
        const token = window.localStorage.getItem("token");
        setToken(token);
        const userInfo =await stayIn(token);
        setUser(userInfo);
        
      }
    }

    checkLogin();
    getStuff();
   
  },[])


  

  return (
    <div>
      <h1 id="title">Fitness Tracker</h1>
      <Header token={token} setUser={setUser} setToken={setToken}/>
      <div className='main'>
      {
        <Routes>
          <Route path = '/signIn' element={<LoginRegister user={user} setUser={setUser} token={token} setToken={setToken} />}/>
          <Route path='/routines' element={<Routines routines={routines} setRoutines={setRoutines} user={user}/>}/>
          <Route path ='/activities' element={<Activities activities={activities} setActivities={setActivities} user={user}/>}/>
          <Route path = '/MyRoutines' element = {<MyRouitines user={user} setUser={setUser} setRoutines={setRoutines}/>}/>

       
          <Route path = '/routines/:routineId' element={<RoutineDetail routines={routines} user={user} activities={activities} setRoutines={setRoutines}/>}/>

          <Route path='/' element={<Navigate to="/routines"/> /*makes the routines page default for now.*/}/>
        </Routes>
      }
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
