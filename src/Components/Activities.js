import React from "react"

import { getActivities } from "../api";
import {PostActivities} from "/";


const Activities =(props) =>{


    const {activities,setActivities} = props;
     getActivities(setActivities);

    return <div>
              <ul>{

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
              {<PostActivities/>}<h1>Activities</h1>
             </div>





      
  
  
  
  
  
  
  
  
  }

export default Activities;