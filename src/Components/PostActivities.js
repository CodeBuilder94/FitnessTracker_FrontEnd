import React, {useState} from "react";
import { getActivities,ActivityPost } from "../api";

const PostActivities =(props) =>{

   

    const [activityName, setActivityName] = useState("");
    const [activityDescription, setActivityDescription] =useState("");
      const [error,setError] = useState("");
         const submit = async (ev) =>{

         ev.preventDefault();
       const gotError = await ActivityPost(activityName, activityDescription);
        setError(gotError);
        setActivityName("");
        setActivityDescription("");

        const activity = await getActivities();
       

       
    }

    return <div id ={"PostForm"}>
        <form onSubmit={submit}>
            <input placeholder="Activity Name" onChange={ev => setActivityName(ev.target.value)}></input>
            <input placeholder="Description" onChange={ev => setActivityDescription(ev.target.value)}></input>
            <button>Submit</button>

        </form>
        {error?<p>{error}</p>:null}
    </div>



}

export default PostActivities;