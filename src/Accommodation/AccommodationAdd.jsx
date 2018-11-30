import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AccommodationAdd extends Component {
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
    console.log("Accommodation Add!", this.state);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

        <label>Lodging</label>
        <input onChange={this.handleChange} type='text' name="lodgingName" placeholder="enter name of lodging" />
        <br /><br />

        <label>Address</label>
        <input onChange={this.handleChange} type='text' name="address" placeholder="enter address of lodging" />
        <br /><br />

        <label>Check In</label>
        <input onChange={this.handleChange} type='text' name="checkInDate" placeholder="enter check in date" />
        <br /><br />

        <label>Check Out</label>
        <input onChange={this.handleChange} type='text' name="checkOutDate" placeholder="enter check out date" />
        <br /><br />

        <label>Price</label>
        <input onChange={this.handleChange} type='number' name="price" placeholder="enter price of lodging" />
        <br /><br />

        <label>Pay Status</label>
        <input onChange={this.handleChange} type='boolean' name="payStatus" placeholder="have you paid for this lodging?" />
        <br /><br />

        <label>Reservation Code</label>
        <input onChange={this.handleChange} type='text' name="reservationCode" placeholder="enter reservation code" />
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


export default AccommodationAdd;