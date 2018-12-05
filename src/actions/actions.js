import axios from 'axios';

//Storing constant data
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_ACCOMMODATION = 'ADD_ACCOMMODATION';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_TRANSIT = 'ADD_TRANSIT';


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
export const addTrip = (trip) => {
  console.log("\nACTION: addTrip:", trip)
  return dispatch => {
    axios.post('/trips/add', trip)
      .then(responseFromDB => {
        console.log("\naddTrip - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_TRIP,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addTrip:", err);
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

export const addTransit = (transit) => {
  console.log("\nACTION: addTransit:", transit)
  return dispatch => {
    axios.post('/transit/add', transit)
      .then(responseFromDB => {
        console.log("\naddTransit - responseFromDB.data:", responseFromDB.data);
        dispatch({
          type: ADD_TRANSIT,
          payload: responseFromDB.data
        })
      })
      .catch(err => {
        console.log("ERROR - actions axios addTransit:", err);
      })
  }
}

