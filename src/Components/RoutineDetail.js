import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { getRoutines } from "../api";
import {AddActivities} from "/";

const RoutineDetail =(props) =>
{
    const {routines, user, activities} = props;
    
    const [Edit, setEdit] = useState(false);

const [currentRId, setCurrentRId] = useState(null);
    
const allowEdit = ()=>
    {
        setEdit(true);
    }


    let {routineId} = useParams();
    let id = Number(routineId.slice(1));

    const routine = routines.find(routine => routine.id === id);

    const getRoutineId = ()=>
    {
        setCurrentRId(routineId);
    }
    if(!currentRId)
    {
       getRoutineId();
    }
    
            
    return <div>{routine ? <div id="RoutineDetails">
            
                <h2>{routine.name}</h2>
                {user.id === routine.creatorId ?<button onClick={allowEdit}>Edit Routine</button>:null}
                <h3>Goal: {routine.goal}</h3>
                <h3>Activities:</h3>
                <div>{routine.activities ?
                    <ol>
                    {
                        routine.activities.map  ((activity) =>{
                            return <li key={activity.id}>
                                <h4>{activity.name}</h4>
                                {user.id === routine.creatorId ? <button>Remove Activity</button>:null}
                                <p><b>Description: </b>{activity.description}</p>
                                <p><b>Duration: </b>{activity.duration}</p>
                                <p><b>Count: </b>{activity.count} reps</p>
                            </li>
                        })
                    }
                    </ol>
                :null}</div>
                <div>{Edit ?
                    <form>
                        <input placeholder="newName"></input>
                        <input placeholder="newGoal"></input>
                    </form> 
                    :null}</div>
            </div>:null}
            <AddActivities currentRId={currentRId} activities={activities}/>
            </div>
}

export default RoutineDetail;