import React, { Component } from 'react';
import './styles.css';
import axios from "axios";


// import axios from 'axios';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getAllUsers } from '../../actions/actions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    // this.props.dispatch(getAllUsers());
  }

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
    // if (this.state.isAuth == true) {
    //   console.log('you are auth!!!')
    // }
    const email = this.state;
    console.log('this email', email);
    axios.post('/login/forgotPassword', email)
      .then(email => {
        console.log('this email', email)
      })

    // console.log('the email entered:', this.state.email)
  }



  render() {
    console.log('what is this props', this.props)
    console.log("Email sent to user for forgotten password", this.state);
    return (
      <div className="container col12 forgotpassword">
        <div className="forgotpassword-form">
          <form onSubmit={this.handleSubmit}>
            <h2>Forgot your password?</h2>
            <p>Enter the email associated with your account and we'll send you an email to help you reset your password.</p>
            <div className="form-group">
              <input autoFocus type="text" id="email" name="email" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="email">Email</label>
            </div>
            <button type="submit">Send email</button>

          </form>

          <Link to="/login">
            Cancel
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // users: state.users
  }
}

export default connect(mapStateToProps)(ForgotPassword);