import React, {useState} from "react";


const MyRoutines = (props) =>{
    const {user} = props;
    console.log(user);
    const [userRoutines, setUserRoutines] = useState([]);

    return<div>
        <h2>${user.username}</h2>
    </div>
}

  

export default MyRoutines
