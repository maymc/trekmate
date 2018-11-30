import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword/ForgotPasswordComponent.jsx';
import Register from '../Register/RegisterComponent.jsx';

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
    console.log("Login - handleSubmit this.props:", this.props);
    console.log("Login Successful! User credentials:", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Email</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
          <br /><br />

          <label>Password</label>
          <input onChange={this.handleChange} type='password' name="password" placeholder="enter password" />
          <br /><br />

          <button type="submit">Login</button>

        </form>

        <Link to="/forgotPassword">
          <button type="button">Forgot Password?</button>
        </Link>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>


        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/register" component={Register} />
      </div>
    )
  }
}


export default Login;