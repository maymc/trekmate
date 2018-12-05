import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addFlight } from '../actions/actions';

class FlightAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airlines: null,
      departure_time: null,
      arrival_time: null,
      reservation_code: null,
      checked_in_baggage: null,
      price: null,
      notes: null,
      user_id: 1,
      trip_id: 1
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
    console.log("FlightAdd - handleSubmit this.props:", this.props);
    console.log("Flight Added!", this.state);

    this.props.dispatch(addFlight(this.state));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Airlines</label>
          <input onChange={this.handleChange} type='text' name="airlines" placeholder="enter airline name..." />
          <br /><br />

          <label>Departure Time</label>
          <input onChange={this.handleChange} type='time' name="departure_time" placeholder="00:00 AM/PM" />
          <br /><br />

          <label>Arrival Time</label>
          <input onChange={this.handleChange} type='time' name="arrival_time" placeholder="00:00 AM/PM" />
          <br /><br />

          <label>Reservation Code</label>
          <input onChange={this.handleChange} type='text' name="reservation_code" placeholder="enter reservation code..." />
          <br /><br />

          <label>Baggage</label>
          <input onChange={this.handleChange} type='number' name="checked_in_baggage" placeholder="enter # of checked in baggage" />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='number' name="price" placeholder="enter price of flight" />
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" placeholder="enter any notes" />
          <br /><br />

          <button type="submit">Add Flight</button>

        </form>
      </div>
    )
  }
}

export default connect()(FlightAdd);