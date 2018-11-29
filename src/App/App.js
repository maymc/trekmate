import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Register from './Login/Register/Register.jsx';

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
    console.log("App - this.props:", this.props);
  }

  //App Component - functions
  //Never mutate 'state' directly, use 'this.setState' (use ES6 to bind)

  addUser = (userFromRegisterForm) => {
    console.log("Axios - Adding new user:", userFromRegisterForm);
    axios
      .post('/login/register', userFromRegisterForm)
      .then(serverData => {
        console.log("\nserverData.data:", serverData.data);
        this.setState({ users: serverData.data })
      })
      .catch(err => {
        console.log("Error w/axios POST/login/register");
      })

  }



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
            <Link to="/login/register">
              <button type="button">Register</button>
            </Link>

            <Route path="/login/register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}

//Export App component so other components can use it
export default App;
