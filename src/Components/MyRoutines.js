import React, {useState} from "react";
import {getUserRoutines, stayIn} from "../api";
import {Link} from "react-router-dom";
import { CreateRoutine } from "/";

const MyRoutines = (props) =>{
    const {user, setUser, token} = props;
    
    const [userRoutines, setUserRoutines] = useState([]);

    
    const getRoutines = async() =>{
        
        
        const routineList = await getUserRoutines(user);
        setUserRoutines(routineList);
        
    }

    const getToken = async() =>{
        const token = window.localStorage.getItem("token");
        const userInfo =await stayIn(token);
        setUser(userInfo);
        
    }

    
        if(!user)
        {
            getToken();
        }
          
        getRoutines();
    

    return<div>
        {user ?<div>
        <h2>welcome: {user.username}</h2>
        <ul>
        {
            <div>
                {userRoutines ?
            userRoutines.map((routine) =>
            {
                return <li key={routine.id}>
                    <h3><Link to ={`/routines/:${routine.id}`}>{routine.name}</Link></h3>
                    <p><b>Goal:</b> {routine.goal}</p>
                </li>
            })
            :null }
            </div>
        }
        </ul>
        </div>:null}
        <CreateRoutine/>
    </div>
}

  

export default MyRoutines
