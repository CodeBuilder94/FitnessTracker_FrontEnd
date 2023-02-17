import React, {useState} from "react";
import { getActivities } from "../api";

const AddActivities= (props) =>
{
    const {currentRId, activities, setActivties} = props;

    //get the activities
    const grabActivities = async() =>{
        const allActivities = await getActivities();
        setActivties(allActivities);
    }

    if(!activities)
    {
        grabActivities();
    }

    return <div id="AddActivityForm">
        <form>
            <b>Select Activity</b>
            <select>
                {
                    activities.map((activity) =>{
                        <option key={activity.id}>{activity.name}</option>
                    })
                }
            </select>
            <button>Add</button>
        </form>
    </div>
}

export default AddActivities;