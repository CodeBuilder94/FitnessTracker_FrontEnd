import React, { useState } from "react";
import { updateRoutine,getRoutines } from "../api";

const EditRoutine = (props) => {
  const {currentRId, currentName, currentGoal, setRoutines } = props;

  const [editRoutineName, setEditRoutineName] = useState("");
  const [editRoutineGoal, setEditRoutineGoal] = useState("");

  const setDefault= () =>{
    setEditRoutineGoal(currentGoal);
    setEditRoutineName(currentName);
  }
  

  const submit = (ev) => {
    ev.preventDefault();

    let id = currentRId.slice(1);

    updateRoutine(editRoutineName, editRoutineGoal, id);
    setEditRoutineGoal("");
    setEditRoutineName("");
    
  };

  if(!editRoutineGoal && !editRoutineName)
  {
    setDefault();
  }
  

  return (
    <div id="EditForm">
      <h2>Edit Routine</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Routine Name"
          onChange={(ev) => setEditRoutineName(ev.target.value)}
        ></input>
        <input
          placeholder="Goal"
          onChange={(ev) => setEditRoutineGoal(ev.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditRoutine;
