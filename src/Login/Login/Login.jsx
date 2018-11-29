import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends Component {
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
    console.log("Login - handleChange this.state:", this.state);
  }

  handleSubmit = (e) => {
    console.log("Login - handleSubmit this.props:", this.props);
    e.preventDefault();
    console.log("User has logged in!", this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>Email</label>
        <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
        <br /><br />

        <label>Password</label>
        <input onChange={this.handleChange} type='text' name="password" placeholder="enter password" />
        <br /><br />

        <button type="submit">Login</button>

      </form>
    )
  }
}


export default Login;