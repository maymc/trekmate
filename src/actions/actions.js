import axios from 'axios';

//Storing constant data
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';


export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';

//---------User Action----------//
export const getAllUsers = () => {
  return dispatch => {
    axios.get('/users')
      .then(response => {
        console.log('users response......:', response.data)

        dispatch({
          type: GET_ALL_USERS,
          payload: response.data
        })
      })
  }
}

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

//---------Accommodation Action----------//
export const getAllAccommodations = () => {

  return dispatch => {
    axios.get('/accommodations')
      .then(response => {
        console.log('accommodation response......:', response.data)
        dispatch({
          type: GET_ALL_ACCOMMODATIONS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_ACCOMMODATIONS,
          payload: 'err'
        })
      })
  }

}