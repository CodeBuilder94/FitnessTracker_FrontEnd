
//function to get all routines
export const getRoutines = ( async(setRoutines) =>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
    .then(response => response.json())
  .then(result => {
    setRoutines(result);
  })
  .catch(console.error);
});

//fetching data from activities
export const getActivities = (async(setActivities) =>{
  fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      setActivities(result);
    })
    .catch(console.error);
  });
  
//functions that handle registration and loging in
export const register = (async(registerName, registerPassword, setRError) =>{
  fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
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
    console.log(result);
    setRError(result.message);
    
  })
  .catch(console.error);
})

export const login = (async(setToken, setUser,setLError, loginUser, loginPass) =>{
  fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
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
    console.log(result);
    setUser(result.user);
    setToken(result.token);
    setLError(result.message);
    
    //set the token in localStorage
    const token =result.token;
    window.localStorage.setItem("token", token)
  })
  .catch(console.error);
})

export const logout = (setUser, setToken) =>
{
  
  window.localStorage.removeItem('token');
  console.log(window.localStorage.getItem());
  setUser({});
  setToken(null);
}

export const stayIn = (async(setToken, setUser) =>
{
  const token = window.localStorage.getItem('token');

  if(token)
  {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/me`,{
      headers:{
        'Content-Type': 'application/json',
        'Authroization': `Bearer ${token}`
      },
    }).then(response => response.json())
    .then(result => {
      const user =result.data;
      setToken(token);
      setUser(user);

    })
    .catch(err => console.log(err));
  }
  else if(token === undefined)
  {
    window.localStorage.removeItem('token');
    setUser({});
    setToken(null);
  }
})