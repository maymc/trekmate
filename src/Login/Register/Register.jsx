import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword/ForgotPassword.jsx';
import Login from '../Login/Login.jsx';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log("Register - handleChange this.state:", this.state);
  }

  handleSubmit = (e) => {
    console.log("Register - handleSubmit this.props:", this.props);
    e.preventDefault();
    console.log("New user has been registered!", this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input onChange={this.handleChange} type='text' name="firstName" placeholder="enter first name" />
        <br /><br />

        <label>Last Name</label>
        <input onChange={this.handleChange} type='text' name="lastName" placeholder="enter last name" />
        <br /><br />

        <label>Email</label>
        <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
        <br /><br />

        <label>Password</label>
        <input onChange={this.handleChange} type='text' name="password" placeholder="enter password" />
        <br /><br />

        <label>Confirm Password</label>
        <input onChange={this.handleChange} type='text' name="confirmPassword" placeholder="confirm password" />
        <br /><br />

        <button type="submit">Register</button>

      </form>

        <Link to="/forgotPassword">
          <button type="button">Forgot Password?</button>
        </Link>
        <Link to="/login">
          <button type="button">Cancel</button>
        </Link>
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/login" component={Login} />
      </div>
    )
  }
}


export default Register;