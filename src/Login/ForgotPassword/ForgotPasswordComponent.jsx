import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../Login/LoginComponent.jsx';

class ForgotPassword extends Component {
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
    console.log("Forgot password - handleChange this.state:", this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("User forgot password submitted!", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Email</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
          <br /><br />

          <button type="submit">Send email</button>

        </form>

        <Link to="/login">
          <button type="button">Cancel</button>
        </Link>

        <Route path="/login" component={Login} />
      </div>
    )
  }
}


export default ForgotPassword;