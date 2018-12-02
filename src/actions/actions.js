import axios from 'axios';

//Storing constant data
export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';

//Action = has type and payload
//Action creater- function that returns an action which is an object with type and payload
// export const getAllUsers = () => {
//   return {
//     type: GET_ALL_USERS,
//     payload: initialState
//   }
// }

// export const getAllAccommodations = () => {
//   return {
//     type: GET_ALL_ACCOMMODATIONS,
//     payload: initialState
//   }
// }

export const addUser = (user) => {
  console.log("\nACTION: addUser:", user)
  return dispatch => {
    axios.post('/login/register', user)
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