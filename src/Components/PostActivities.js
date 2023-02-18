import React, {useState} from "react";
import { getActivities,ActivityPost } from "../api";

const PostActivities =(props) =>{

    const {setActivities} = props;

    const [activityName, setActivityName] = useState("");
    const [activityDescription, setActivityDescription] =useState("");

         const submit = async (ev) =>{

         ev.preventDefault();
        await ActivityPost(activityName, activityDescription);
        setActivityName("");
        setActivityDescription("");

        const activity = await getActivities();
        setActivities(activity);

       
    }

    return <div id ={"PostForm"}>
        <form onSubmit={submit}>
            <input placeholder="Activity Name" onChange={ev => setActivityName(ev.target.value)}></input>
            <input placeholder="Description" onChange={ev => setActivityDescription(ev.target.value)}></input>
            <button>Submit</button>

        </form>
    </div>



}

export default PostActivities;