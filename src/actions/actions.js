import axios from 'axios';

//Storing constant data
export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_ACCOMMODATION = 'ADD_ACCOMMODATION';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';

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

export const addAccommodation = (accommodation) => {
  console.log("\nACTION: addAccommodation:", accommodation)
  return dispatch => {
    axios.post('/accommodations/add', accommodation)
      .then(responseFromDB => {
        console.log("\naddAccommodation - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_ACCOMMODATION,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addAccommodation:", err);
      })
  }
}

export const addFlight = (flight) => {
  console.log("\nACTION: addFlight:", flight)
  return dispatch => {
    axios.post('/flights/add', flight)
      .then(responseFromDB => {
        console.log("\naddFlight - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_FLIGHT,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addFlight:", err);
      })
  }
}

export const addActivity = (activity) => {
  console.log("\nACTION: addActivity:", activity)
  return dispatch => {
    axios.post('/activities/add', activity)
      .then(responseFromDB => {
        console.log("\naddActivity - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_ACTIVITY,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addActivity:", err);
      })
  }
}