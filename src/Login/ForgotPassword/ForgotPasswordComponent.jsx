import React, { Component } from 'react';
import './styles.css';
import axios from "axios";


// import axios from 'axios';
// import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { requestPassword } from '../../actions/actions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      data: []
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
    // if (this.state.isAuth == true) {
    //   console.log('you are auth!!!')
    // }
    const email = this.state;
    // console.log('this email', email.data);
    axios.post('/login/forgotPassword', email)
      .then(email => {
        console.log('this email', email.data)
        this.setState({
          data: email.data
        })

      })

  }


  render() {
    console.log('what is this props', this.props)
    const status = this.state.data.status;
    console.log("Email sent to user for forgotten password", status);
    if (status === 'success') {
      return (<Redirect to={`/login/forgot_password/request`}
      />
      )
    }
    else if (status === 'failed') {
      return (
        <div className="container col12 forgotpassword">
          <div className="formplace forgotpassword-form">
            <form onSubmit={this.handleSubmit}>
              <h2>Forgot your password?</h2>
              <p>Enter the email associated with your account and we'll send you an email to help you reset your password.</p>
              <div className="form-group">
                <input autoFocus type="text" id="email" name="email" onChange={this.handleChange} className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="email">Email</label>
                <div className='invalid-email'>Invalid email address</div>
              </div>
              <button type="submit">Send email</button>
            </form>
            <Link to="/login">
              Cancel
          </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container col12 forgotpassword">
          <div className="formplace forgotpassword-form">
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
}

const mapStateToProps = state => {
  return {
    email: null,
    data: state.data
  }
}

export default connect(mapStateToProps)(ForgotPassword);