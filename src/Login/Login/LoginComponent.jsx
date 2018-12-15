import React, { Component } from 'react';
import './styles.css';
import axios from "axios";

//Redux Setup
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Import actions
import { loginUser } from '../../actions/actions';

/// Internal imports
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging In...', this.state)
    // this.loginUser(this.state)
    this.props.dispatch(loginUser(this.state));
  }


  //Login function
  loginUser = (userData) => {
    console.log('new user', userData);
    axios
      .post('/auth/login', userData)
      .then(userData => {
        console.log("userData:", userData);
        const email = JSON.parse(userData.config.data).email
        console.log('email for auth login user', email)
        console.log('user data coming back', JSON.parse(userData.config.data).email);
        console.log('userData password:', JSON.parse(userData.config.data).password);

        localStorage.setItem('email', email);

        // this.props.history.push(`/users/account/1`);
      })
      .catch(err => {
        console.log("Error login user", err);
      })
  }

  render() {
    return (
      <div className="container col12 login">
        <div className="maponegrad">
        </div>
        <div className="mapone">
        </div>
        <div className="maptwograd">
        </div>
        <div className="maptwo">
        </div>
        <div className="mapthreeform">
          <h1>Login</h1>
          <form className="loginform" onSubmit={this.handleSubmit}>

            <div className="form-group">
              <input autoFocus autoComplete="username" type="text" id="email" name="email" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <input autoComplete="current-password" type="password" id="password" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="password">Password</label>
            </div>
            <button type="submit">Login</button>

          </form>
          <Link to="/auth/login/register">
            <button className="ghost" type="button">Register</button>
          </Link>
          <Link to="/login/forgotPassword">
            Forgot Password?
          </Link>
        </div>
        <div className="mapthree">
        </div>
      </div>
    )
  }
}


export default connect()(Login);