import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export const addUser = (user) => {
  console.log("\nACTION: addUser:", user)
  return dispatch => {
    axios
      .post('/login/register', user)
      .then(responseFromDB => {
        console.log("\naddUser - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_USER,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addUser:", err);
      })
  }
}