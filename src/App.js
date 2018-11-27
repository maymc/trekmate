import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files


//Setup for redux
// import { connect } from 'react-redux';
// import { getAllTasks } from './actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {

    }
  }

  //Lifecycle Methods
  componentDidMount() {

  }

  //App Component - functions
  //Never mutate 'state' directly, use 'this.setState' (use ES6 to bind)





  //App Component - render html elements
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trekmate</h1>
        </header>
      </div>
    );
  }
}

//Export App component so other components can use it
export default App;
