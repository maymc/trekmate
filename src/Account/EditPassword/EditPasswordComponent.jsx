import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class EditPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: null,
      lastName: null,
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edit Password!", this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>Previous Password</label>
        <input onChange={this.handleChange} type='text' name="previousPassword" placeholder="enter previous password" />
        <br /><br />

        <label>Password</label>
        <input onChange={this.handleChange} type='text' name="password" placeholder="enter new password" />
        <br /><br />

        <label>Confirm Password</label>
        <input onChange={this.handleChange} type='text' name="confirmPassword" placeholder="confirm password" />
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    )
  }
}


export default EditPassword;