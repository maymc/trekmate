import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';

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
      <form onSubmit={this.handleSubmit}>

        <label>Email</label>
        <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
        <br /><br />

        <button type="submit">Send email</button>

      </form>
    )
  }
}

export default ForgotPassword;