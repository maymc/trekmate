import axios from 'axios';

//Storing constant data
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const ADD_USER = 'ADD_USER';

export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';
export const GET_ALL_TRIPS = 'GET_ALL_TRIPS';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ALL_TRANSITS = 'GET_ALL_TRANSITS';
export const GET_ALL_FLIGHTS = 'GET_ALL_FLIGHTS';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_ACCOMMODATION = 'ADD_ACCOMMODATION';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_TRANSIT = 'ADD_TRANSIT';


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
export const getUser = (id) => {
  return dispatch => {
    axios.get(`/users/${id}`)
      .then(response => {
        dispatch({ type: GET_USER_BY_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual user')
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

//-----------Trip Action-------------//
export const getAllTrips = () => {

  return dispatch => {
    axios.get('/trips')
      .then(response => {
        console.log('trips response......:', response.data)
        dispatch({
          type: GET_ALL_TRIPS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_TRIPS,
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


//-----------FLight Action-------------//
export const getAllFlights = () => {

  return dispatch => {
    axios.get('/flights')
      .then(response => {
        console.log('flight response......:', response.data)
        dispatch({
          type: GET_ALL_FLIGHTS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_FLIGHTS,
          payload: 'err'
        })
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

//-----------Activity Action-------------//
export const getAllActivities = () => {

  return dispatch => {
    axios.get('/activities')
      .then(response => {
        console.log('activity response......:', response.data)
        dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: 'err'
        })
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

//---------Transit Action----------//
export const getAllTransits = () => {

  return dispatch => {
    axios.get('/transit')
      .then(response => {
        console.log('transits response......:', response.data)
        dispatch({
          type: GET_ALL_TRANSITS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_TRANSITS,
          payload: 'err'
        })
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

