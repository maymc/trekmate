import {
  GET_ALL_ACCOMMODATIONS,
  GET_ALL_USERS,
  ADD_USER,
  ADD_ACCOMMODATION,
  ADD_FLIGHT
}
  from '../actions/actions.js';

//Takes in action and current state, if there is no state then it will be an empty array
const reducer = (state = {
  users: [],
  accommodations: [],
  flights: []
}, action) => {

  //Action is an object {type:...payload:...}
  //action.payload = array of objects
  console.log("\nREDUCER ACTION: ", action);
  console.log("\nCURRENT STATE:", state);

  switch (action.type) {
    // case GET_ALL_ACCOMMODATIONS:
    //   return { ...state, accommodations: action.payload };
    // case GET_ALL_USERS:
    //   return { ...state, users: action.payload }
    case ADD_USER:
      return { ...state, form: action.payload }
    case ADD_ACCOMMODATION:
      return { ...state, form: action.payload }
    case ADD_FLIGHT:
      return { ...state, form: action.payload }
    default:
      //default is to return original state to do nothing 
      return state;
  }
}

export default reducer;