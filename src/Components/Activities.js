import React from "react"

import { getActivities } from "../api";
import {PostActivities} from "/";


const Activities =(props) =>{


    const {activities,setActivities,user} = props;
     getActivities(setActivities);
      console.log(user)
    return <div>
              <h1>Activities</h1>
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


              {user.id?<PostActivities/>:null}

             </div>





      
  
  
  
  
  
  
  
  
  }

export default Activities;