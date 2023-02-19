import React, {useState} from "react";
import { getActivities, giveRoutineActivity } from "../api";

const AddActivities= (props) =>
{
    const {currentRId, activities} = props;

    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activityId, setActivityId] =useState(0);

    
    const addAct = async(ev) =>{
        
        ev.preventDefault();
        const routineId =currentRId.slice(1);
        
        await giveRoutineActivity(routineId, activityId, count, duration);
        
        setCount(0);
        setDuration(0);
        setActivityId(0);

    }
    

    return <div id="AddActivityForm">
        <form onSubmit={addAct}>
            <label>Select Activity
            <select name="SelectedActivity" onChange={ev => setActivityId(ev.target.value)}>
                {
                    activities.map((activity) =>{
                       return <option key={activity.id} value={activity.id}>{activity.name}</option>
                    })
                }
            </select>
            </label>
            <label>Reps:
                <input placeholder="count" onChange={ev => setCount(ev.target.value)}></input>
            </label>
            <label>Minutes:
                <input placeholder="duration" onChange={ev => setDuration(ev.target.value)}></input>
            </label>
            <button>Add</button>
        </form>
    </div>
}

export default AddActivities;