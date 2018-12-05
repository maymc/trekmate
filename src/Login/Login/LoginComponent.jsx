import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ForgotPassword from '../ForgotPassword/ForgotPasswordComponent.jsx';
// import Register from '../Register/RegisterComponent.jsx';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  //Helper functions
  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log("Login - handleLogin this.props:", this.props);
    console.log("Login Successful! User credentials:", this.state);
    this.props.history.push(`/`); //change this to authenticated view when created
  }

  render() {
    return (
      <div className="login-container">
        <div className="maponegrad">
        </div>
        <div className="mapone">
        </div>
        <div className="maptwograd">
        </div>
        <div className="maptwo">
        </div>
        <div className="mapthree">
          <form onSubmit={this.handleChange}>

          </form>
        </div>




        {/* <form onSubmit={this.handleLogin}>

          <label>Email:</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
          <br /><br />

          <label>Password:</label>
          <input onChange={this.handleChange} type='password' name="password" placeholder="enter password" />
          <br /><br />

          <button type="submit">Login</button>

        </form>

        <Link to="/login/forgotPassword">
          <a type="button">Forgot Password?</a>
        </Link>
        <Link to="/login/register">
          <button className="ghost" type="button">Register</button>
        </Link> */}

      </div>
    )
  }
}


export default Login;