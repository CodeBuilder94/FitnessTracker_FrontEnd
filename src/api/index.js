
//function to get all routines
export const getRoutines = ( async() =>{
   return fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
    .then(response => response.json())
  .then(result => {
    //console.log(result);
    return result;
  })
  .catch(console.error);
});


//fetching user routines into My Routines page
export const getUserRoutines = async (user) => {
  const token = window.localStorage.getItem('token');
  return fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user.username}/routines`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(console.error);
  };

//fetching data from activities


export const getActivities = (async() =>{


  return fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
      //console.log(result);


    return result 
   })

     
    .catch(console.error);
  });

//functions that handle registration and loging in
export const register = (async(registerName, registerPassword) =>{
  return fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: `${registerName}`,
    password: `${registerPassword}`
  })
}).then(response => response.json())
  .then(result => {
    
    return result;
    
  })
})

// function that populates the users personal routines


export const login = (async(loginUser, loginPass) =>{
  return fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: `${loginUser}`,
    password: `${loginPass}`
  })
}).then(response => response.json())
  .then(result => {
    
    //set the token in localStorage
    const token =result.token;
    console.log(token)
    window.localStorage.setItem("token", token)
    return result;
  })
})

export const logout = () =>
{
  
  window.localStorage.removeItem('token');
  
}

export const stayIn = async(token) =>
{  //console.log(token);
  if(token)
  {
    return fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/me`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(response => response.json())
    .then(result => {
      const user =result;
      //console.log(user);
      return user;

    })
    .catch(err => console.log(err));
  }
  else if(token === undefined)
  {
    window.localStorage.removeItem('token');
    
  }
}

//create a new routine
export const MakeRoutine = async (routineName, routineGoal) =>{
  
  const token = window.localStorage.getItem("token");

  fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: `${routineName}`,
    goal: `${routineGoal}`,
    isPublic: true
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}


export const ActivityPost = async(activityName, activityDescription) =>{

  const token = window.localStorage.getItem("token");

 return fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  method: "POST", headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: `${activityName}`,
    description: `${activityDescription}`
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    if(result.error){
      return result.error
    }
  })
  .catch(console.error);
}

//delete a routine and everyting on it
export const deleteRoutine = async(id) =>
{
  const token = window.localStorage.getItem("token");

  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    
  })
  .catch(console.error);
}


export const giveRoutineActivity = async(routineId, activityId, count, duration) =>
{
  
  const token = window.localStorage.getItem("token");

  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    activityId: `${activityId}`,
    count: `${count}`, 
    duration: `${duration}`
     })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
// edit a routine

export const updateRoutine = async(editRoutineName, editRoutineGoal, editRoutineId) => {

  const token = window.localStorage.getItem("token");

  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${editRoutineId}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name: `${editRoutineName}`,
    goal: `${editRoutineGoal}`,
    isPublic: true
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}



export const removeRoutineActivity = async(routineActivityId) =>
{
  const token = window.localStorage.getItem("token");

  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

//update an activity on a routine
export const updateRoutineActivity = async(id, count, duration) =>
{
  const token = window.localStorage.getItem("token");

  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${id}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    count: `${count}`,
    duration: `${duration}`
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);

  })
  .catch(console.error);
}


