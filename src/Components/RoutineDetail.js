import React from "react";
import { useParams } from "react-router-dom";
import { getRoutines } from "../api";

const RoutineDetail =(props) =>
{
    const {routines, setRoutines} = props;
    
    if(routines.length===0)
    {   
        getRoutines(setRoutines);
    }

    let {routineId} = useParams();
    let id = Number(routineId.slice(1));

    const routine = routines.find(routine => routine.id === id);
    
    return <div id="RoutineDetails">

                <h2>{routine.name}</h2>
                <h3>Activities:</h3>
                <ol>
                {
                    routine.activities.map  ((activity) =>{
                        return <li key={activity.id}>
                            <h4>{activity.name}</h4>
                            <p><b>Description: </b>{activity.description}</p>
                            <p><b>Duration: </b>{activity.duration}</p>
                            <p><b>Count: </b>{activity.count} reps</p>
                        </li>
                    })
                }
                </ol>
            </div>
}

export default RoutineDetail;