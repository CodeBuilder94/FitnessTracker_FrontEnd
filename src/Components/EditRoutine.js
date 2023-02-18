import React, { useState } from "react";

const EditRoutine = (props) => {
  const { routines, setRoutines, currentRId } = props;

  const [editRoutineName, setEditRoutineName] = useState("");
  const [editRoutineGoal, setEditRoutineGoal] = useState("");

  const submit = (ev) => {
    ev.preventDefault();
    updateRoutine(editRoutineName, editRoutineGoal, currentRId);
    setEditRoutineGoal("");
    setEditRoutineName("");
    //getRoutines(setRoutines);
  };

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
