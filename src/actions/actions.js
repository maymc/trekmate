import axios from 'axios';

//Storing constant data

//~~~~~Auth~~~~//
export const LOGIN_USER = 'LOGIN_USER';

//~~~~~Users~~~~//
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const REQUEST_PASSWORD = 'REQUEST_PASSWORD';

//~~~~~Trips~~~~//
export const GET_ALL_TRIPS = 'GET_ALL_TRIPS';
export const GET_TRIP_BY_ID = 'GET_TRIP_BY_ID';
export const GET_TRIPS_BY_USER_ID = 'GET_TRIPS_BY_USER_ID';
export const ADD_TRIP = 'ADD_TRIP';
export const EDIT_TRIP = 'EDIT_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';

//~~~~~Accommodations~~~~//
export const GET_ALL_ACCOMMODATIONS = 'GET_ALL_ACCOMMODATIONS';
export const GET_ACCOMMODATIONS_BY_TRIP_ID = 'GET_ACCOMMODATIONS_BY_TRIP_ID';
export const GET_ACCOMMODATION_BY_ID = 'GET_ACCOMMODATION_BY_ID';
export const ADD_ACCOMMODATION = 'ADD_ACCOMMODATION';
export const EDIT_ACCOMMODATION = 'EDIT_ACCOMMODATION';
export const DELETE_ACCOMMODATION = 'DELETE_ACCOMMODATION';
// export const GET_ACCOMMODATION_BY_USER_ID = 'GET_ACCOMMODATION_BY_USER_ID';

//~~~~~Activities~~~~//
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ACTIVITY_BY_ID = 'GET_ACTIVITY_BY_ID';
export const GET_ACTIVITIES_BY_TRIP_ID = 'GET_ACTIVITY_BY_TRIP_ID';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const EDIT_ACTIVITY = 'EDIT_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

// export const GET_ACTIVITY_BY_USER_ID = 'GET_ACTIVITY_BY_USER_ID';

//~~~~~Flights~~~~//
export const GET_ALL_FLIGHTS = 'GET_ALL_FLIGHTS';
export const GET_FLIGHT_BY_ID = 'GET_FLIGHT_BY_ID';
export const GET_FLIGHTS_BY_TRIP_ID = 'GET_FLIGHTS_BY_TRIP_ID';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const EDIT_FLIGHT = 'EDIT_FLIGHT';
export const DELETE_FLIGHT = 'DELETE_FLIGHT';

// export const GET_FLIGHT_BY_USER_ID = 'GET_FLIGHT_BY_USER_ID';

//~~~~~Transit~~~~//
export const GET_ALL_TRANSIT = 'GET_ALL_TRANSIT';
export const GET_TRANSIT_BY_ID = 'GET_TRANSIT_BY_ID';
export const GET_TRANSIT_BY_TRIP_ID = 'GET_TRANSIT_BY_TRIP_ID';
export const ADD_TRANSIT = 'ADD_TRANSIT';
export const EDIT_TRANSIT = 'EDIT_TRANSIT';
export const DELETE_TRANSIT = 'DELETE_TRANSIT';

// export const GET_FLIGHT_BY_USER_ID = 'GET_FLIGHT_BY_USER_ID';
export const GET_FLIGHT_BY_TRIP_ID = 'GET_FLIGHT_BY_TRIP_ID';
export const GET_ALL_BY_TRIP_ID = 'GET_ALL_BY_TRIP_ID';

//---------Auth Action----------//
export const loginUser = (user) => {
  console.log("what is user??:", user)
  console.log("what is userID??:", user.userId)
  return dispatch => {
    axios.post('/auth/login', user)
      .then(response => {
        const email = JSON.parse(response.config.data).email
        const userId = JSON.parse(response.config.data).userId
        console.log('response.config.data', response.config.data)
        localStorage.setItem('email', email)
        localStorage.setItem('userId', userId)

        console.log("ACTION - loginUser response:", response)

        dispatch({
          type: LOGIN_USER,
          payload: response.data,
          data: user.userId
        })
      })
      .catch(err => {
        console.log('error in logging in user action')
      })
  }
}

//------GET ALL-----------//
export const getAllByTrip = (id) => {
  return dispatch => {
    return Promise.all([
      axios.get(`/accommodations/trip/${id}`),
      axios.get(`/activities/trip/${id}`),
      axios.get(`/transit/trip/${id}`),
      axios.get(`/flights/trip/${id}`),
      axios.get(`/trips/${id}`)
    ])

      .then(response => {
        console.log('response.data:', response)
        dispatch({ type: GET_ALL_BY_TRIP_ID, payload: { accommodations: response[0].data, activities: response[1].data, transit: response[2].data, flights: response[3].data, trips: response[4].data[0] } })
      })
      .catch(err => {
        console.log('error in getting all by trip_id', err)
      })
  }
}

//---------User Action----------//
export const getAllUsers = () => {
  return dispatch => {
    axios.get('/users')
      .then(response => {
        console.log('getAllUsers response.data:', response.data)

        dispatch({
          type: GET_ALL_USERS,
          payload: response.data
        })
      })
  }
}
export const getUserById = (id) => {
  console.log('id', id)
  return dispatch => {
    axios.get(`/users/${id}`)
      .then(response => {
        console.log("ACTION - getUserById response:", response)
        dispatch({
          type: GET_USER_BY_ID,
          payload: response.data
        })
      })
      .catch(err => {
        console.log('error in getting individual user')
      })
  }
}

export const addUser = (user) => {
  console.log("\nACTION: addUser:", user)
  return dispatch => {
    axios.post('/auth/login/register', user)
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

export const editUser = (user) => {
  const { id } = user;
  console.log("\nACTION: editUser:", user)
  console.log("Check id:", id);
  return dispatch => {
    axios.put(`/users/account/edit/${id}`, user)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_USER, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editUser:", err);
      })
  }
}

export const editPassword = (password) => {
  const { id } = password;
  console.log("\nACTION: editPassword:", password)
  console.log("Check id:", id);
  return dispatch => {
    axios.put(`/auth/users/account/edit_password/${id}`, password)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_PASSWORD, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editPassword:", err);
      })
  }
}

export const requestPassword = (email) => {
  return dispatch => {
    console.log("\nACTION: editPassword:", email)

    axios.put(`/auth/login/forgotPassword/request`, email)
      .then(response => {
        console.log('res.......', response)
        dispatch({ type: REQUEST_PASSWORD, payload: response.data })
      })
      .catch(err => {
        console.log('error- request password:', err)
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

export const getTripsByUserId = (id) => {
  return dispatch => {
    axios.get(`/trips/user/${id}`)
      .then(response => {
        dispatch({
          type: GET_TRIPS_BY_USER_ID,
          payload: response.data
        })
      })
      .catch(err => {
        console.log('error in getting trips by user id')
      })
  }
}

export const getTripById = (id) => {
  return dispatch => {
    // console.log("here???", id)
    axios.get(`/trips/${id}`)
      .then(response => {
        // console.log("working response?", response);
        dispatch({
          type: GET_TRIP_BY_ID,
          payload: response.data[0]
        })
      })
      .catch(err => {
        console.log('error in getting individual trip')
      })
  }
}

export const addTrip = (trip) => {
  console.log("\nACTION: addTrip:", trip)
  trip.start_date = trip.startDate._d.toString()
  trip.end_date = trip.endDate._d.toString()
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

export const editTrip = (id, trip) => {
  // const { id } = trip;
  console.log("\nACTION: editTrip:", trip)
  console.log("\nACTION: ID Trip:", id)

  // console.log("Check id:", id);
  return dispatch => {
    axios.put(`/trips/edit/${id}`, trip)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_TRIP, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editTrip:", err);
      })
  }
}

export const deleteTrip = (id) => {
  console.log('ACTION DELETE DELETE HIT', id);
  return dispatch => {
    axios.delete(`/trips/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_TRIP, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR IN DELETE ', err)
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

export const getAccommodationsByTrip = (id) => {
  console.log("ACTION - getAccommodationsByTrip");

  return dispatch => {
    axios.get(`/accommodations/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_ACCOMMODATIONS_BY_TRIP_ID, payload: response.data })
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
  accommodation.check_in_date = accommodation.startDate._d
  accommodation.check_out_date = accommodation.endDate._d
  console.log("\nACTION: addAccommodation", accommodation)
  return dispatch => {
    axios.post('/accommodations/add', accommodation)
      .then(responseFromDB => {
        // console.log("\naddAccommodation - responseFromDB.data:", responseFromDB.data);
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
  const id = accommodations.id;
  accommodations.check_in_date = accommodations.startDate._d.toString()
  accommodations.check_out_date = accommodations.endDate._d.toString()
  console.log("\nACTION: editAccommodation:", accommodations)
  console.log("Check id:", id);
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
export const deleteAccommodation = (id) => {
  console.log('ACTION DELETE HIT', id);
  return dispatch => {
    axios.delete(`/accommodations/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_ACCOMMODATION, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR IN DELETE ', err)
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

export const getActivitiesByTrip = (id) => {
  console.log("ACTION - getActivitiesByTrip");

  return dispatch => {
    axios.get(`/activities/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_ACTIVITIES_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual activity by trip_id', err)
      })
  }
}

export const getActivityById = (id) => {
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

export const addActivity = (activity) => {
  activity.date = activity.date._d
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

export const editActivity = (activity) => {
  const { id } = activity;
  activity.date = activity.date._d
  console.log("\nACTION: editActivity:", activity)
  console.log("Check id:", id);
  return dispatch => {
    axios.put(`/activities/edit/${id}`, activity)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_ACTIVITY, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editAccommodation:", err);
      })
  }
}

export const deleteActivity = (id) => {
  console.log('ACTION DELETE HIT', id);
  return dispatch => {
    axios.delete(`/activities/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_ACTIVITY, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR IN DELETE ', err)
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

export const getFlightById = (id) => {
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

export const getFlightsByTrip = (id) => {
  return dispatch => {
    axios.get(`/flights/trip/${id}`)
      .then(response => {
        dispatch({ type: GET_FLIGHTS_BY_TRIP_ID, payload: response.data })
      })
      .catch(err => {
        console.log('error in getting individual FLIGHT by trip_id', err)
      })
  }
}

export const addFlight = (flight) => {
  console.log("\nACTION: addFlight:", flight)
  flight.arrival_date = flight.endDate._d.toString()
  flight.departure_date = flight.startDate._d.toString()
  console.log("\nACTION After: addFlight:", flight)

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

export const editFlight = (flight) => {
  const { id } = flight;
  flight.arrival_date = flight.endDate._d.toString()
  flight.departure_date = flight.startDate._d.toString()

  console.log("Check id:", id);
  console.log("\nACTION: editFlight:", flight)
  return dispatch => {
    axios.put(`/flights/edit/${id}`, flight)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_FLIGHT, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editFlight:", err);
      })
  }
}

export const deleteFlight = (id) => {
  console.log('ACTION DELETE HIT', id);
  return dispatch => {
    axios.delete(`/flights/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_FLIGHT, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR IN DELETE ', err)
      })
  }
}

//---------Transit Action----------//
export const getAll = () => {

  return dispatch => {
    axios.get('/transit')
      .then(response => {
        console.log('transit response......:', response.data)
        dispatch({
          type: GET_ALL_TRANSIT,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_TRANSIT,
          payload: 'err'
        })
      })
  }
}

export const getTransitById = (id) => {
  return dispatch => {
    axios.get(`/transit/${id}`)
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
    axios.get(`/transit/trip/${id}`)
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
  transit.date = transit.date._d.toString()
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

export const editTransit = (transit) => {
  const { id } = transit;
  transit.date = transit.date._d.toString()
  console.log("\nACTION: edittransit:", transit)
  console.log("Check id:", id);
  return dispatch => {
    axios.put(`/transit/edit/${id}`, transit)
      .then(responseFromDB => {
        console.log("\nCheck - responseFromDB:", responseFromDB.data)
        dispatch({ type: EDIT_TRANSIT, payload: responseFromDB.data });
      })
      .catch(err => {
        console.log("ERROR - actions editTransit:", err);
      })
  }
}

export const deleteTransit = (id) => {
  console.log('ACTION DELETE HIT', id);
  return dispatch => {
    axios.delete(`/transit/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_TRANSIT, payload: response.data })
      })
      .catch(err => {
        console.log('ERROR IN DELETE ', err)
      })
  }
}

export const logout = () => {
  localStorage.clear();
}