import React, {useState} from "react";
import { getRoutines } from "../api";

const CreateRoutine =(props) =>{
    const {routines, setRoutines} = props

    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");


    const submit =(ev) =>{
        ev.preventDefault();
        CreateRoutine(routineName, routineGoal);
        setRoutineGoal("");
        setRoutineName("");
        getRoutines(setRoutines);
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