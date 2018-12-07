import React, { Component } from 'react';
import './styles.css';

// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div className="mapthreeform">
          <h1>Login</h1>
          <form className="loginform" onSubmit={this.handleChange}>
            <div class="form-group">
              <input type="text" id="email" name="email" onChange={this.handleChange} className="form-control" required></input>
              <label class="form-control-placeholder" for="email">Email</label>
            </div>
            <div class="form-group">
              <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label class="form-control-placeholder" for="password">Password</label>
            </div>
            <button type="submit">Login</button>

          </form>
          <Link to="/login/register">
            <button className="ghost" type="button">Register</button>
          </Link>
          <Link to="/login/forgotPassword">
            <button type="button">Forgot Password?</button>
          </Link>
        </div>
        <div className="mapthree">
        </div>
      </div>
    )
  }
}


export default Login;