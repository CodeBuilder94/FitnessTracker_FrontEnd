import React, {useState} from "react";
import { getRoutines, MakeRoutine } from "../api";

const CreateRoutine =(props) =>{
    
    const {setRoutines} = props;

    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");


    const submit = async (ev) =>{
        
        ev.preventDefault();
        const token = window.localStorage.getItem("token");
        await MakeRoutine(routineName, routineGoal, token);
        setRoutineGoal("");
        setRoutineName("");

        const allRoutines = await getRoutines();
        setRoutines(allRoutines);

       
    }

    return <div id="CreateForm">
        <form onSubmit={submit}>
            <input placeholder="Routine Name" onChange={ev => setRoutineName(ev.target.value)}></input>
            <input placeholder="Goal" onChange={ev => setRoutineGoal(ev.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>
}

export default CreateRoutine;