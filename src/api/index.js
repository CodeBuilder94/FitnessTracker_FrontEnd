
//function to get all routines
export const getRoutines = ( async(setRoutines) =>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
    .then(response => response.json())
  .then(result => {
    setRoutines(result);
  })
  .catch(console.error);
});


//fetching user routines into My Routines page
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

//fetching data from activities
export const getActivities = (async(setActivities) =>{
  fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
      //console.log(result);
      setActivities(result);
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
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/me`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(response => response.json())
    .then(result => {
      const user =result;
      console.log(user);
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
export const CreateRoutine = (routineName, routineGoal) =>{
  fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  method: "POST",
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