
//function to get all routines
export const getRoutines = ( async(setRoutines) =>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
    .then(response => response.json())
  .then(result => {
    setRoutines(result);
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
  })
  .catch(console.error);
})