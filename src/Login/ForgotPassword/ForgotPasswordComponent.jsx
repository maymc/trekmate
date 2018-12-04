import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  //Helper Functions
  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email sent to user for forgotten password", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Forgot your password?</p>
          <label>Please enter your email address:</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="email" />
          <br /><br />

          <button type="submit">Send email</button>

        </form>

        <Link to="/login">
          <button type="button">Cancel</button>
        </Link>

      </div>
    )
  }
}

export default ForgotPassword;