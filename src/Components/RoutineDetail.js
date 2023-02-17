import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRoutines } from "../api";
import EditRoutine from "./EditRoutine";

const RoutineDetail = (props) => {
  const { routines, setRoutines, user } = props;

  const [Edit, setEdit] = useState(false);

  const grabRoutines = async () => {
    if (routines.length === 0) {
      const routineList = await getRoutines();
      setRoutines(routineList);
    }
  };

  if (routines.length === 0) {
    grabRoutines();
  }

  const allowEdit = () => {
    setEdit(true);
  };

  let { routineId } = useParams();
  let id = Number(routineId.slice(1));

  const routine = routines.find((routine) => routine.id === id);

  const [currentRId, setCurrnetRId] = useState(routine.id);

  return (
    <div>
      {routine ? (
        <div id="RoutineDetails">
          <h2>{routine.name}</h2>
          {user.id === routine.creatorId ? (
            <button onClick={allowEdit}>Edit Routine</button>
          ) : null}
          <h3>Goal: {routine.goal}</h3>
          <h3>Activities:</h3>
          <div>
            {routine.activities ? (
              <ol>
                {routine.activities.map((activity) => {
                  return (
                    <li key={activity.id}>
                      <h4>{activity.name}</h4>
                      {user.id === routine.creatorId ? (
                        <button>Remove Activity</button>
                      ) : null}
                      <p>
                        <b>Description: </b>
                        {activity.description}
                      </p>
                      <p>
                        <b>Duration: </b>
                        {activity.duration}
                      </p>
                      <p>
                        <b>Count: </b>
                        {activity.count} reps
                      </p>
                    </li>
                  );
                })}
              </ol>
            ) : null}
          </div>
          <div>
            {/* {Edit ?  */}
              <EditRoutine
            
                currentRId={currentRId}
              />
             {/* : null} */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RoutineDetail;
