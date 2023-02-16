import React from "react";

const Activities =(props) =>{

    const {activities} = props;

    return <ul>{
                   activities.map((activity)=>{
                     return <li key={activity.id} className="activity">
                        {<div>
                             
                             <div className="ByLine"><h4>{activity.name}</h4><h5>By: {activity.creatorName}</h5></div>
                            <p><b>Name: </b>{activity.name}</p>
                            <p><b>Description: </b>{activity.description}</p>
                      
                          </div>
                        }
                      </li>
                   })                 
             }
             </ul>


}

export default Activities;