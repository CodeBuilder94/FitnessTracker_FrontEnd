import React, {useState} from "react";
import { useParams } from "react-router-dom";

import {removeRoutineActivity } from "../api";
import {AddActivities, UpdateRoutineActivityForm} from "/";
import EditRoutine from "./EditRoutine";

const RoutineDetail =(props) =>
{
    const {routines, user, activities, setRoutines} = props;
    
    const [Edit, setEdit] = useState(false);
    const [editActiveActivity, setEditActiveActivity] = useState(false);
    const [rAId, setRAId] = useState(0);
    const [currentRId, setCurrentRId] = useState(null);
    const [currentName, setCurrentName] = useState("");
    const [currentGoal, setCurrentGoal] = useState("");
    const [activityCount, setActivityCount] = useState(0);
    const [activityDuration, setActivityDuration] = useState(0);
    
    
    const allowEdit = ()=>
        {
            setEdit(true);
            setCurrentName(routine.name);
            setCurrentGoal(routine.goal);
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

    const editActivity = async(routineActivityId, count, duration) =>
    {
        setEditActiveActivity(true);
        setRAId(routineActivityId);
        setActivityCount(count);
        setActivityDuration(duration);
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
                                <p><b>Duration: </b>{activity.duration} minutes</p>
                                <p><b>Count: </b>{activity.count} reps</p>
                                {user.id === routine.creatorId ? <button onClick={() =>editActivity(activity.routineActivityId, activity.count, activity.duration)}>Edit Activity</button>:null}
                                {editActiveActivity ? <UpdateRoutineActivityForm rAId={rAId} activityCount={activityCount} activityDuration={activityDuration}/>:null}
                            </li>
                        })
                    }
                    </ol>
                :null}</div>
            </div>:null}
            <div>
             {Edit ? <EditRoutine currentRId={currentRId} currentName={currentName} currentGoal={currentGoal} setRoutines={setRoutines}/> : null} 
          </div>
            {routine && user.id === routine.creatorId ?<AddActivities currentRId={currentRId} activities={activities}/>: null}
            </div>
}


export default RoutineDetail;
