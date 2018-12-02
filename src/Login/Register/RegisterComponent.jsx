import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';

//Import components
import ForgotPassword from '../ForgotPassword/ForgotPasswordComponent.jsx';
import Login from '../Login/LoginComponent.jsx';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addUser } from '../../actions/actions.js';


class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: null,
      last_name: null,
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

  handleRegister = (e) => {
    e.preventDefault();
    console.log("Register - handleSubmit this.props:", this.props);
    console.log("New user has been registered!", this.state);

    this.props.dispatch(addUser(this.state));
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <form onSubmit={this.handleRegister}>
          <label>First Name</label>
          <input onChange={this.handleChange} type='text' name="first_name" placeholder="enter first name" />
          <br /><br />

          <label>Last Name</label>
          <input onChange={this.handleChange} type='text' name="last_name" placeholder="enter last name" />
          <br /><br />

          <label>Email</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
          <br /><br />

          <label>Password</label>
          <input onChange={this.handleChange} type='password' name="password" placeholder="enter password" />
          <br /><br />

          {/* <label>Confirm Password</label>
          <input onChange={this.handleChange} type='password' name="confirmPassword" placeholder="confirm password" />
          <br /><br /> */}

          <button type="submit">Register</button>

        </form>
        <Link to="/login">
          <button type="button">Cancel</button>
        </Link>
      </div>
    )
  }
}

//Gives access to state, returns an object. This is store state. You already have data in store, want it to be available as props so create a mapping. Redux provides API to do that
const mapStateToProps = state => {
  return {
    users: state
  }
}


export default connect(mapStateToProps)(Register);
// export default Register;