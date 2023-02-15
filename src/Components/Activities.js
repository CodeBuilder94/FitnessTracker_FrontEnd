import React from "react";
import { getActivities } from "../api";

const Activities =(props) =>{

    const {activities} = props;

    


    return <ul>{
                   activities.map((activity)=>{
                     return <li>
                        <div>
                            <p><b>Name: </b>{activity.name}</p>
                            <p><b>Description: </b>{activity.description}</p>
                        </div>
                     </li>
                   })


        }</ul>


}

export default Activities;