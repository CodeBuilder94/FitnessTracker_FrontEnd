import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getRoutines, removeRoutineActivity } from "../api";
import {AddActivities} from "/";
import EditRoutine from "./EditRoutine";

const RoutineDetail =(props) =>
{
    const {routines, user, activities} = props;
    
    const [Edit, setEdit] = useState(false);

    const [currentRId, setCurrentRId] = useState(null);
        
    const allowEdit = ()=>
        {
            setEdit(true);
        }
    
    const chunkActivity = async(routineActivityId) =>{
        await removeRoutineActivity(routineActivityId);
    }





  

  

  let { routineId } = useParams();
  let id = Number(routineId.slice(1));


  const routine = routines.find((routine) => routine.id === id);


    

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
                                {user.id === routine.creatorId ? <button onClick={() =>chunkActivity(activity.routineActivityId)}>Remove Activity</button>:null}
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
            <div>
            {/* {Edit ?  */}
              <EditRoutine
            
                currentRId={currentRId}
              />
             {/* : null} */}
          </div>
            {routine && user.id === routine.creatorId ?<AddActivities currentRId={currentRId} activities={activities}/>: null}
            </div>
}


export default RoutineDetail;
