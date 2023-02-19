import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import {getRoutinesWithActivity} from "../api"


const ActivitiesByRoutines =({routines, activities,}) =>
{
    let {activityId} = useParams();
    let id = Number(activityId.slice(1));

    const [routinesWithAct, setRoutinesWithAct] = useState([]);

    const getActivities = async() =>
    {
        const routineList = await getRoutinesWithActivity(id);
        setRoutinesWithAct(routineList);
    }
    
    if(routinesWithAct.length ===0)
    {
        getActivities();
    }

    return <div>
        <h2>The Routines You're Looking For:</h2>
        <ul>
            {
            routinesWithAct.map((routine) =>
                {
                    return <div key={routine.id}><li><Link to={`/routines/:${routine.id}`}>{routine.name}</Link></li>
                    <ul>
                    <li>{routine.creatorName}</li>
                        <li><b>Goal: </b>{routine.goal}</li>
                    </ul>
                    </div>
                })
            }
        </ul>
    </div>
    
}

export default ActivitiesByRoutines;