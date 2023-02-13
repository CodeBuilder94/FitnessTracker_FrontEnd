
//function to get all routines
export const getRoutines = ( async(setRoutines) =>{
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
    .then(response => response.json())
  .then(result => {
    setRoutines(result);
  })
  .catch(console.error);
});