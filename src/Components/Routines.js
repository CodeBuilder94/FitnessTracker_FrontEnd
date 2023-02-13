import React from "react";

const Routines = (props) =>
{
    const {routines} = props;
    
    return <ul>
        {
            routines.map((routine) =>{
                return <li key={routine.id} className="routine">
                    {<div>
                        <div className="ByLine"><h4>{routine.name}</h4><h5>By: {routine.creatorName}</h5></div>
                        <p><b>Goal: </b>{routine.goal}</p>
                    </div>
                    }
                </li>
            })
        }
    </ul>
}

export default Routines;