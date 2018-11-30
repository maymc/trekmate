import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AccommodationEdit extends Component {
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
    console.log("Accommodation Edit!", this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

        <label>Lodging</label>
        <input onChange={this.handleChange} type='text' name="lodgingName" placeholder="edit name of lodging" />
        <br /><br />

        <label>Address</label>
        <input onChange={this.handleChange} type='text' name="address" placeholder="edit address of lodging" />
        <br /><br />

        <label>Check In</label>
        <input onChange={this.handleChange} type='text' name="checkInDate" placeholder="edit check in date" />
        <br /><br />

        <label>Check Out</label>
        <input onChange={this.handleChange} type='text' name="checkOutDate" placeholder="edit check out date" />
        <br /><br />

        <label>Price</label>
        <input onChange={this.handleChange} type='number' name="price" placeholder="edit price of lodging" />
        <br /><br />

        <label>Pay Status</label>
        <input onChange={this.handleChange} type='text' name="payStatus" placeholder="have you paid for this lodging?" />
        <br /><br />

        <label>Reservation Code</label>
        <input onChange={this.handleChange} type='text' name="reservationCode" placeholder="edit reservation code" />
        <br /><br />

        <label>Notes</label>
        <input onChange={this.handleChange} type='text' name="notes" placeholder="edit any notes" />
        <br /><br />
        
        <button type="submit">Submit</button>

      </form>
      </div>
    )
  }
}


export default AccommodationEdit;