import React, {useState} from "react";


const Home = (props) =>{
    const {user} = props;
    console.log(user);
    const [userRoutines, setUserRoutines] = useState([]);

    return<div>
        <h2>${user.username}</h2>
    </div>
}

export const getUserRoutines = async (setUserRoutines, user) => {
fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user.username}/routines`, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
    setUserRoutines(result);
  })
  .catch(console.error);
};  

export default Home
