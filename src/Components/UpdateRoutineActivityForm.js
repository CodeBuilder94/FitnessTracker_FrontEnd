import React, {useState} from "react";
import { updateRoutineActivity } from "../api";


const UpdateRoutineActivityForm =({rAId, startingCount, startingDuration}) =>
{
    const [duration, setDuration] = useState("");
    const [count, setCount] = useState("");
    
    const setDefault =() =>
    {
        setDuration(startingDuration);
        setCount(startingCount);
    }

    const update =(ev) =>
    {   ev.preventDefault();

        setDefault();
        updateRoutineActivity(rAId, count, duration);
    }

    return <div id="updateForm">
        <form onSubmit={update}>
        <label>duration:
            <input placeholder="minutes" onChange={ev => setDuration(ev.target.value)}></input>
        </label>
        <label>count:
            <input placeholder="reps" onChange={ev => setCount(ev.target.value)}></input>
        </label>
        <button>Submit</button>
        </form>
    </div>
}

export default UpdateRoutineActivityForm;