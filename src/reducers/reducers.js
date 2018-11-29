import {
  ADD_USER
}
  from '../actions/actions.js';

//Takes in action and current state, if there is no state then it will be an empty array
const itemReducer = (state = [], action) => {
  //action is an object {type:...payload:...}
  console.log("\nREDUCER ACTION: ", action);
  console.log("\nCURRENT STATE:", state);
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      //default is to return original state to do nothing 
      return state;
  }
}

export default itemReducer;