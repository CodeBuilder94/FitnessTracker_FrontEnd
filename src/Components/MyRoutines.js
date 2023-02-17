import React, {useState} from "react";
import {getUserRoutines, stayIn} from "../api";
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
        console.log(user);
    }

    if(userRoutines)
    {
        if(!user)
        {
            getToken();
        }
          
        getRoutines(); 
    }
    

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
                    <h3>{routine.name}</h3>
                    <p>Goal: {routine.goal}</p>
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
