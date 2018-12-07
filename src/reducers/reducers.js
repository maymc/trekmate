import {
  GET_ALL_ACCOMMODATIONS,
  GET_ALL_USERS,
  GET_ALL_TRIPS,
  GET_ALL_FLIGHTS,
  GET_ALL_ACTIVITIES,
  GET_ALL_TRANSITS,
  GET_USER_BY_ID,
  GET_ACCOMMODATION_BY_ID,
  GET_TRIP_BY_ID,
  GET_ACTIVITY_BY_ID,
  GET_TRANSIT_BY_ID,
  GET_FLIGHT_BY_ID,
  GET_ACCOMMODATION_BY_TRIP_ID,
  GET_ACTIVITY_BY_TRIP_ID,
  GET_TRANSIT_BY_TRIP_ID,
  GET_FLIGHT_BY_TRIP_ID,
  ADD_USER,
  ADD_TRIP,
  ADD_ACCOMMODATION,
  ADD_FLIGHT,
  ADD_ACTIVITY,
  ADD_TRANSIT
}
  from '../actions/actions.js';

//Takes in action and current state, if there is no state then it will be an empty array
const reducer = (state = {
  users: [],
  accommodations: [],
  accommodationById: {},
  activities: [],
  flights: [],
  transit: [],
  form: {}
}, action) => {

  console.log("\nREDUCER ACTION: ", action);

  switch (action.type) {
    //-------User --------//
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case ADD_USER:
      return { ...state, form: action.payload }
    case GET_USER_BY_ID:
      return action.payload

    //-------Accommodation --------//
    case GET_ALL_ACCOMMODATIONS:
      console.log("REDUCER - what is at GET_ALL_ACCOMMODATINS?:", action.payload)
      return { ...state, accommodations: action.payload }
    case ADD_ACCOMMODATION:
      return { ...state, form: action.payload }
    case GET_ACCOMMODATION_BY_ID:
      console.log("REDUCER - GET ACCOMMODATIONS_BY_ID");
      return { ...state, accommodationById: action.payload }
    case GET_ACCOMMODATION_BY_TRIP_ID:
      return { ...state, accommodation: action.payload }

    //-------Trip------------//
    case GET_ALL_TRIPS:
      return action.payload
    case ADD_TRIP:
      return { ...state, form: action.payload }
    case GET_TRIP_BY_ID:
      return { ...state, trip: action.payload }

    //-------Activity---------//
    case GET_ALL_ACTIVITIES:
      return action.payload
    case ADD_ACTIVITY:
      return { ...state, form: action.payload }
    case GET_ACTIVITY_BY_ID:
      return action.payload
    case GET_ACTIVITY_BY_TRIP_ID:
      return { ...state, activity: action.payload }

    //-------Flight---------//
    case GET_ALL_FLIGHTS:
      return action.payload
    case ADD_FLIGHT:
      return { ...state, form: action.payload }
    case GET_FLIGHT_BY_ID:
      return action.payload
    case GET_FLIGHT_BY_TRIP_ID:
      return { ...state, flight: action.payload }

    //-------Transit --------//
    case GET_ALL_TRANSITS:
      return action.payload
    case ADD_TRANSIT:
      return { ...state, form: action.payload }
    case GET_TRANSIT_BY_ID:
      return action.payload
    case GET_TRANSIT_BY_TRIP_ID:
      return { ...state, transit: action.payload }

    default:
      //default is to return original state to do nothing 
      return state;
  }
}

export default reducer;