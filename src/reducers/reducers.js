import {
  LOGIN_USER,

  GET_ALL_USERS,
  GET_USER_BY_ID,
  ADD_USER,
  REQUEST_PASSWORD,

  GET_ALL_TRIPS,
  GET_TRIP_BY_ID,
  GET_TRIPS_BY_USER_ID,
  ADD_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,

  GET_ACCOMMODATIONS_BY_TRIP_ID,
  GET_ACCOMMODATION_BY_ID,
  GET_ALL_ACCOMMODATIONS,
  ADD_ACCOMMODATION,
  EDIT_ACCOMMODATION,

  GET_ALL_ACTIVITIES,
  GET_ACTIVITY_BY_ID,
  GET_ACTIVITIES_BY_TRIP_ID,
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,

  GET_ALL_FLIGHTS,
  GET_FLIGHTS_BY_TRIP_ID,
  GET_FLIGHT_BY_ID,
  ADD_FLIGHT,
  EDIT_FLIGHT,
  DELETE_FLIGHT,

  GET_ALL_TRANSIT,
  GET_TRANSIT_BY_TRIP_ID,
  GET_TRANSIT_BY_ID,
  ADD_TRANSIT,
  EDIT_TRANSIT,
  DELETE_TRANSIT,

  GET_ALL_BY_TRIP_ID,
  DELETE_ACCOMMODATION
}
  from '../actions/actions.js';

//Takes in action and current state, if there is no state then it will be an empty array
const reducer = (state = {
  loginData: {},

  users: [],
  userById: [],
  authUserEmail: [],
  trips: [],
  tripById: [],
  tripsByUserId: [],
  isAuth: false,
  archivedTrip: [],
  updatedTrip: [],

  accommodations: [],
  accommodationsByTripId: [],
  accommodationById: {},
  updatedAccommodation: [],
  archivedAccommodation: [],

  activities: [],
  activitiesByTripId: [],
  activityById: {},
  updatedActivity: [],
  archivedActivity: [],

  flights: [],
  flightsByTripId: [],
  flightById: {},
  updatedFlight: [],
  archivedFlight: [],

  transit: [],
  transitByTripId: [],
  transitById: {},
  updatedTransit: [],
  archivedTransit: [],

  form: {}
}, action) => {

  console.log("\nREDUCER ACTION: ", action);

  switch (action.type) {

    //-------LOGIN_USER ----------//
    case LOGIN_USER:
      console.log("REDUCER LOGIN USER");
      const newLoginData = {
        isLoggedIn: action.payload,
        userLoginId: action.data
      }
      return { ...state, loginData: newLoginData };

    case REQUEST_PASSWORD:
      console.log('reducer request password');
      return { ...state, email: action.payload }

    //-------GET ALL BY TRIP_ID ----------//
    case GET_ALL_BY_TRIP_ID:
      return action.payload;

    //-------User --------//
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case GET_USER_BY_ID:
      return { ...state, userById: action.payload }
    case ADD_USER:
      return { ...state, form: action.payload }

    //-------Trip------------//
    case GET_ALL_TRIPS:
      return { ...state, trips: action.payload }
    case GET_TRIP_BY_ID:
      return { ...state, tripById: action.payload }
    case GET_TRIPS_BY_USER_ID:
      return { ...state, tripsByUserId: action.payload }
    case ADD_TRIP:
      return { ...state, form: action.payload }
    case DELETE_TRIP:
      console.log("REDUCER>>>>>", action.payload)
      return { ...state, archivedTrip: action.payload }
    case EDIT_TRIP:
      return { ...state, updatedTrip: action.payload }

    //-------Accommodation --------//
    case GET_ACCOMMODATIONS_BY_TRIP_ID:
      console.log("REDUCER - what is at GET_ACCOMMODATION_BY_TRIP_ID?:", action.payload)
      return { ...state, accommodationsByTripId: action.payload }

    case GET_ACCOMMODATION_BY_ID:
      console.log("REDUCER - GET ACCOMMODATION_BY_ID");
      return { ...state, accommodationById: action.payload }

    case GET_ALL_ACCOMMODATIONS:
      console.log("REDUCER - what is at GET_ALL_ACCOMMODATIONS?:", action.payload)
      return { ...state, accommodations: action.payload }

    case ADD_ACCOMMODATION:
      return { ...state, form: action.payload }

    case EDIT_ACCOMMODATION:
      return { ...state, updatedAccommodation: action.payload }

    case DELETE_ACCOMMODATION:
      return { ...state, archivedAccommodation: action.payload }

    //-------Activity---------//
    case GET_ALL_ACTIVITIES:
      return { ...state, activities: action.payload }
    case GET_ACTIVITIES_BY_TRIP_ID:
      return { ...state, activitiesByTripId: action.payload }
    case GET_ACTIVITY_BY_ID:
      return { ...state, activityById: action.payload }
    case ADD_ACTIVITY:
      return { ...state, form: action.payload }
    case EDIT_ACTIVITY:
      return { ...state, updatedActivity: action.payload }
    case DELETE_ACTIVITY:
      return { ...state, archivedAccommodation: action.payload }

    //-------Flight---------//
    case GET_ALL_FLIGHTS:
      return { ...state, flights: action.payload }
    case GET_FLIGHTS_BY_TRIP_ID:
      return { ...state, flightsByTripId: action.payload }
    case GET_FLIGHT_BY_ID:
      return { ...state, flightById: action.payload }
    case ADD_FLIGHT:
      return { ...state, form: action.payload }
    case EDIT_FLIGHT:
      return { ...state, updatedFlight: action.payload }
    case DELETE_FLIGHT:
      return { ...state, archivedFlight: action.payload }
    //-------Transit --------//
    case GET_ALL_TRANSIT:
      return { ...state, transit: action.payload }
    case GET_TRANSIT_BY_TRIP_ID:
      return { ...state, transitByTripId: action.payload }
    case GET_TRANSIT_BY_ID:
      return { ...state, transitById: action.payload }
    case ADD_TRANSIT:
      return { ...state, form: action.payload }
    case EDIT_TRANSIT:
      return { ...state, updatedTransit: action.payload }
    case DELETE_TRANSIT:
      console.log("REDUCER>>>>>", action.payload)
      return { ...state, archivedTransit: action.payload }

    default:
      //default is to return original state to do nothing 
      return { ...state, loginData: false };
  }
}

export default reducer;