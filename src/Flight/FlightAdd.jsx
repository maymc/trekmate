import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FlightAdd extends Component {
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
    console.log("Flight Add!", this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

        <label>Airlines</label>
        <input onChange={this.handleChange} type='text' name="airlines" placeholder="enter name of airline" />
        <br /><br />

        <label>Departure Time</label>
        <input onChange={this.handleChange} type='text' name="departureTime" placeholder="enter departure time" />
        <br /><br />

        <label>Arrival Time</label>
        <input onChange={this.handleChange} type='text' name="arrivalTime" placeholder="enter arrival time" />
        <br /><br />

        <label>Reservation Code</label>
        <input onChange={this.handleChange} type='text' name="reservationCode" placeholder="enter reservation code" />
        <br /><br />

        <label>Baggage</label>
        <input onChange={this.handleChange} type='text' name="baggage" placeholder="enter amount of check in baggage" />
        <br /><br />

        <label>Price</label>
        <input onChange={this.handleChange} type='text' name="price" placeholder="enter price of flight" />
        <br /><br />

        <label>Notes</label>
        <input onChange={this.handleChange} type='text' name="notes" placeholder="enter any notes" />
        <br /><br />

        
        <button type="submit">Submit</button>

      </form>
      </div>
    )
  }
}


export default FlightAdd;