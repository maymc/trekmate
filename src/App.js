import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Register from './Login/Register/Register.jsx';
import EditPassword from './Login/EditPassword/EditPassword.jsx';
import ForgotPassword from './Login/ForgotPassword/ForgotPassword.jsx';
import Login from './Login/Login/Login.jsx';
import Activity from './Home/Activity/Activity.jsx';

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

        <Router>
          <div>

            <Link to="/home">
              <button type="button">Home</button>
            </Link>
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
            <Link to="/editPassword">
              <button type="button">Edit Password</button>
            </Link>
            <Link to="/forgotPassword">
              <button type="button">Forgot Password</button>
            </Link>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>

            <Route path="/home" component={Activity} />
            <Route path="/register" component={Register} />
            <Route path="/editPassword" component={EditPassword} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/login" component={Login} />

          </div>
        </Router>
      </div>
    );
  }
}

//Export App component so other components can use it
export default App;
