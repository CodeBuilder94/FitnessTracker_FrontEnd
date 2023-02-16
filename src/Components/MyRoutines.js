import React, { useState } from "react";

const MyRoutines = (props) => {
  const { user } = props.user;
  const myRoutines = props.routines;
  const myActivities = props.activities;
  console.log(props);
  const [userRoutines, setUserRoutines] = useState([]);

  if(!user.username){
    return <h1>log in to view your routines</h1>
  }
    else { 
        return (
            <form>
    <div>
      <h2>${user.username}</h2>
    </div>
    </form>
  );
};
}
export default MyRoutines
