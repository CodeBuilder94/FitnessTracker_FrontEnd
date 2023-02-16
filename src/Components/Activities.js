import React from "react";

const Activities =(props) =>{

    const {activities,setActivities} = props;
     getActivities(setActivities);
    return <ul>{

             activities.map((activity)=>{
              return<li>
                <div>{
                     
                    <><p><b>Name: </b>{activity.name}</p><p><b>Description: </b>{activity.description}</p></>
             }</div>
              </li>
             })






      }</ul>
  
  
  
  
  
  
  
  
  }
export default Activities;