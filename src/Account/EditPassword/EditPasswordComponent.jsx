import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import './styles.css';
import { Link } from 'react-router-dom';
import { getUserById } from '../../actions/actions';

class EditPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: null,
      id: null
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    let user = this.props.match.params.id;
    this.props.dispatch(getUserById(user))
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("User password has been updated!", this.state);
    this.props.history.push(`/account/:id`); //change this to authenticated view when created
  }

  render() {
    const { users } = this.props;
    return (
      <div className="updatepassword-container">
        <div className="updatepassword-form">
          <form onSubmit={this.handleSubmit}>
            <h2>Update your password</h2>
            <div className="form-group">
              <input autoFocus autoComplete="current-password" type="password" id="currentpassword" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="currentpassword">Current Password</label>
            </div>
            <div className="form-group">
              <input autoComplete="new-password" type="password" id="newpassword" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="newpassword">New Password</label>
            </div>
            <div className="form-group">
              <input autoComplete="new-password" type="password" id="password" name="password" onChange={this.handleChange} className="form-control" required></input>
              <label className="form-control-placeholder" htmlFor="password">Confirm New Password</label>
            </div>
            <button type="submit">Submit</button>
          </form>
          <Link to={`/account/${users.id}`}>
            Cancel
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state,
  }
}
export default connect(mapStateToProps)(EditPassword);