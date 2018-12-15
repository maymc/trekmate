import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

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

    //Redirect to login page after successful registration
    this.props.history.push(`/auth/login`);
  }

  render() {
    return (
      <div className="container col12 register">
        <div className="rmapthreeform">
          <h1>Register</h1>
          <form className="registerform" onSubmit={this.handleRegister}>
            <div className="form-group">
              <input autoFocus type="text" id="firstname" name="first_name" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="firstname">First Name</label>
            </div>
            <div className="form-group">
              <input type="text" id="lastname" name="last_name" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="lastname">Last Name</label>
            </div>
            <div className="form-group">
              <input autoComplete="username" type="text" id="email" name="email" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input autoComplete="new-password" type="password" id="password" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="password">Password</label>
            </div>
            <div className="form-group">
              <input type="password" id="confirmpassword" name="confirmpassword" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="confirmpassword">Confirm Password</label>
            </div>

            <button type="submit">Register</button>

          </form>
          <Link to="/auth/login">
            Cancel
          </Link>
        </div>
        {/* <div className="rmapthree">
        </div> */}
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