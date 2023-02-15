import React from "react";
import { getRoutines } from "../api";

const Routines = (props) =>
{
    const {routines, setRoutines} = props;
    getRoutines(setRoutines);
    return <ul>
        {
            routines.map((routine) =>{
                return <li key={routine.id} className="routine">
                    {<div>
                        <div className="ByLine"><h4>{routine.name}</h4><h5>By: {routine.creatorName}</h5></div>
                        <p><b>Goal: </b>{routine.goal}</p>
                        <h5>Activities</h5>
                        <ol>
                        {
                            routine.activities.map((activity) =>{
                                return<li key={activity.id}>{
                                    <div>
                                        <h6>{activity.name}</h6>
                                    </div>
                                }</li>
                            })
                        }
                        </ol>
                    </div>
                    }
                </li>
            })
        }
    </ul>
}

export default Routines;