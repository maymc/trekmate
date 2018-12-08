import React, { Component } from 'react';
import './styles.css';

class EditTrip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      city: null,
      state: null,
      country: null,
      startDate: null,
      endDate: null,
      collaborators: null
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
    console.log("EditTrip props:", this.props);
    console.log("Edit Trip state:", this.state);
    this.props.history.push(`/`); //change this to authenticated view when created
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>City</label>
          <input onChange={this.handleChange} type='text' name="city" placeholder="edit type of transit" />
          <br /><br />

          <label>State</label>
          <input onChange={this.handleChange} type='text' name="state" placeholder="edit transit date" />
          <br /><br />

          <label>Country</label>
          <input onChange={this.handleChange} type='text' name="country" placeholder="edit transit time" />
          <br /><br />

          <label>Start Date</label>
          <input onChange={this.handleChange} type='text' name="startDate" placeholder="edit transit reservation" />
          <br /><br />

          <label>End Date</label>
          <input onChange={this.handleChange} type='text' name="endDate" placeholder="edit price of transit" />
          <br /><br />

           <label>Collaborators</label>
          <input onChange={this.handleChange} type='text' name="collaborators" placeholder="edit price of transit" />
          <br /><br />

        </form>
      </div>
    )
  }
}


export default EditTrip;