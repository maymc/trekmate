import axios from 'axios';

//Storing constant data

//~~~~~Users~~~~//
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const ADD_USER = 'ADD_USER';

//~~~~~Accommodations~~~~//
export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';
export const GET_ACCOMMODATION_BY_ID = 'GET_ACCOMMODATION_BY_ID';
export const GET_ACCOMMODATION_BY_TRIP_ID = 'GET_ACCOMMODATION_BY_TRIP_ID';
// export const GET_ACCOMMODATION_BY_USER_ID = 'GET_ACCOMMODATION_BY_USER_ID';
export const ADD_ACCOMMODATION = 'ADD_ACCOMMODATION';
export const EDIT_ACCOMMODATION = 'EDIT_ACCOMMODATION';
export const FILL_IN_EDIT_ACCOMMODATION = 'FILL_IN_EDIT_ACCOMMODATION';

//~~~~~Trips~~~~//
export const GET_ALL_TRIPS = 'GET_ALL_TRIPS';
export const ADD_TRIP = 'ADD_TRIP';
export const GET_TRIP_BY_ID = 'GET_TRIP_BY_ID';
// export const GET_TRIP_BY_USER_ID = 'GET_TRIP_BY_USER_ID';

//~~~~~Activities~~~~//
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const GET_ACTIVITY_BY_ID = 'GET_ACTIVITY_BY_ID';
// export const GET_ACTIVITY_BY_USER_ID = 'GET_ACTIVITY_BY_USER_ID';
export const GET_ACTIVITY_BY_TRIP_ID = 'GET_ACTIVITY_BY_TRIP_ID';

//~~~~~Transit~~~~//
export const GET_ALL_TRANSITS = 'GET_ALL_TRANSITS';
export const ADD_TRANSIT = 'ADD_TRANSIT';
export const GET_TRANSIT_BY_ID = 'GET_TRANSIT_BY_ID';
// export const GET_TRANSIT_BY_USER_ID = 'GET_TRANSIT_BY_USER_ID';
export const GET_TRANSIT_BY_TRIP_ID = 'GET_TRANSIT_BY_TRIP_ID';


export const GET_ALL_FLIGHTS = 'GET_ALL_FLIGHTS';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const GET_FLIGHT_BY_ID = 'GET_FLIGHT_BY_ID';
// export const GET_FLIGHT_BY_USER_ID = 'GET_FLIGHT_BY_USER_ID';
export const GET_FLIGHT_BY_TRIP_ID = 'GET_FLIGHT_BY_TRIP_ID';

//Action = has type and payload
//Action creater- function that returns an action which is an object with type and payload

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
        console.log('ACTION - getAllAccommodations data:', response.data)
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

export const getAccommodationByTrip = (id) => {
  console.log("ACTION - getAccommodationByTrip");

  return dispatch => {
    axios.get(`/accommodations/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_ACCOMMODATION_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual accommodation by trip_id', err)
      })
  }
}

export const getAccommodationById = (id) => {
  return dispatch => {
    axios.get(`/accommodations/${id}`)
      .then(response => {
        dispatch({ type: GET_ACCOMMODATION_BY_ID, payload: response.data[0] })
      })
      .catch(err => {
        console.log('error in getting individual accommodation', err)
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

export const editAccommodation = (accommodations) => {
  const { id } = accommodations;
  console.log("\nACTION: editAccommodation:", accommodations)
  console.log("what is id????", id);
  return dispatch => {
    axios.put(`/accommodations/edit/${id}`, accommodations)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_ACCOMMODATION, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editAccommodation:", err);
      })
  }
}

export const fillInEditAccommodation = (id, body) => {
  return dispatch => {
    axios
      .put(`/accommodations/edit/${id}`, body)
      .then(response => {
        dispatch({
          type: GET_ACCOMMODATION_BY_ID,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: "DISPLAY_ERROR_NOTIFICATION",
          err
        });
      });
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

export const getTrip = (id) => {
  return dispatch => {
    axios.get(`/trips/${id}`)
      .then(response => {
        dispatch({ type: GET_TRIP_BY_ID, payload: response.data[0] })
      })
      .catch(err => {
        console.log('error in getting individual trip')
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

export const getFlight = (id) => {
  return dispatch => {
    axios.get(`/flights/${id}`)
      .then(response => {
        dispatch({ type: GET_FLIGHT_BY_ID, payload: response.data[0] })
      })
      .catch(err => {
        console.log('error in getting individual flight')
      })
  }
}


export const getFlightByTrip = (id) => {
  return dispatch => {
    axios.get(`/flights/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_FLIGHT_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual FLIGHT by trip_id', err)
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

export const getActivityByTrip = (id) => {
  return dispatch => {
    axios.get(`/activities/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_ACTIVITY_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual activity by trip_id', err)
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
export const getActivity = (id) => {
  return dispatch => {
    axios.get(`/activities/${id}`)
      .then(response => {
        dispatch({ type: GET_ACTIVITY_BY_ID, payload: response.data[0] })
      })
      .catch(err => {
        console.log('error in getting individual activity')
      })
  }
}
//---------Transit Action----------//
export const getAllTransits = () => {

  return dispatch => {
    axios.get('/transits')
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

export const getTransit = (id) => {
  return dispatch => {
    axios.get(`/transits/${id}`)
      .then(response => {
        dispatch({ type: GET_TRANSIT_BY_ID, payload: response.data[0] })
      })
      .catch(err => {
        console.log('error in getting individual transit')
      })
  }
}


export const getTransitByTrip = (id) => {
  return dispatch => {
    axios.get(`/transits/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_TRANSIT_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual TRANSIT by trip_id', err)
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

