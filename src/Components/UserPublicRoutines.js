import React, {useState} from "react";
import { useParams} from "react-router-dom";
import { routinesByUser } from "../api";

const UserPublicRoutines = () =>
{
    
    const [userRoutines, setUserRoutines] = useState([]);

    const getRoutines = async() =>
    {
        const routineList = await routinesByUser(name);
        setUserRoutines(routineList);
    }

    const {username} = useParams();
    const name = username.slice(1);

    if(userRoutines.length ===0)
    {
        getRoutines();
    }

    return <div>
        <h2>{name}</h2>
        <ul>
            {
                userRoutines.map((routine) =>
                {
                    return <li key={routine.id}>
                        <h3>{routine.name}</h3>
                        <p><b>Goal: </b>{routine.goal}</p>
                    </li>
                })
            }
        </ul>
    </div>
}

export default UserPublicRoutines;