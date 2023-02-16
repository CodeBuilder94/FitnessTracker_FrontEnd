import React from "react";
import {Link} from "react-router-dom";
import { getRoutines } from "../api";

const Routines = (props) =>
{
    const {routines, setRoutines, user} = props;
    
   getRoutines(setRoutines);
    return <div>
        <h2>Routines</h2>
        <ul>
        {
            routines.map((routine) =>{
                return <li key={routine.id} className={user.id == routine.creatorId ? "routine MyRoutine":"routine"}>
                    {<div>
                        <div className="ByLine"><h4><Link to={`/routines/:${routine.id}`}>{routine.name}</Link></h4><h5>By: {routine.creatorName}</h5></div>
                        <p><b>Goal: </b>{routine.goal}</p>
                    </div>
                    }
                </li>
            })
        }
    </ul>
    </div>
}

export default Routines;