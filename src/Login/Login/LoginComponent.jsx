import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
      <form onSubmit={this.handleLogin}>

        <label>Email</label>
        <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
        <br /><br />

        <label>Password</label>
        <input onChange={this.handleChange} type='password' name="password" placeholder="enter password" />
        <br /><br />

        <button type="submit">Login</button>

      </form>
    )
  }
}


export default Login;