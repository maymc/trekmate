import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editPassword, getUserById } from '../../actions/actions';

import { Link } from 'react-router-dom';


class EditPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.userById.id,
      password: this.props.userById.password,
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes form the url
    const userId = this.props.match.params.id;
    console.log("Setting userId:", userId);

    this.props.dispatch(getUserById(userId));
  }

  handleChange = (e) => {
    console.log("EditPasswordComponent - handleChange")
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      id: this.props.userById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - EditPasswordComponent - this.props:", this.props);
    console.log("\nhandleSubmit - EditPasswordComponent - this.props.userById.id:", this.props.userById.id);

    console.log("User password has been updated! - this.state:", this.state);

    this.props.dispatch(editPassword(this.state, this.props.userById.id));

    // Redirect to user's account page
    this.props.history.push(`/users/account/${this.props.userById.id}`);
  }

  render() {
    // const { users } = this.props;
    return (
      <div className="container col12">
        <div className="formplace updatepassword-form">

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

          <Link to={`users/account/${this.props.userById.id}`}>
            Cancel
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // activities: state.activities,
    userById: state.userById
  }
}

export default connect(mapStateToProps)(EditPassword);