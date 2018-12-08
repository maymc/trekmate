import React, { Component } from 'react';
import './styles.css';

class EditAccountComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      firstName: null,
      lastName: null,
      email: null
    }
  }

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
    console.log("EditAccountComponent props:", this.props);
    console.log("EditAccountComponent state:", this.state);
    this.props.history.push(`/`); //change this to authenticated view when created
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>First Name</label>
          <input onChange={this.handleChange} type='text' name="firstName" placeholder="edit account's first name..." />
          <br /><br />

          <label>Last Name</label>
          <input onChange={this.handleChange} type='text' name="lasteName" placeholder="edit account's last name" />
          <br /><br />

          <label>Email</label>
          <input onChange={this.handleChange} type='text' name="email" placeholder="edit your email" />
          <br /><br />

        </form>
      </div>
    )
  }
}


export default EditAccountComponent;