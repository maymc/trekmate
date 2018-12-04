import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';

class EditPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("User password has been updated!", this.state);
    this.props.history.push(`/account/:id`); //change this to authenticated view when created
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Previous Password</label>
          <input onChange={this.handleChange} type='password' name="previousPassword" placeholder="enter previous password" />
          <br /><br />

          <label>Password</label>
          <input onChange={this.handleChange} type='password' name="password" placeholder="enter new password" />
          <br /><br />

          <label>Confirm Password</label>
          <input onChange={this.handleChange} type='password' name="confirmPassword" placeholder="confirm password" />
          <br /><br />

          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}


export default EditPassword;