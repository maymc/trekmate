import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editFlight, getFlightById } from '../actions/actions';

class FlightEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airlines: this.props.flightById.airlines,
      departure_time: this.props.flightById.departure_time,
      arrival_time: this.props.flightById.arrival_time,
      reservation_code: this.props.flightById.reservation_code,
      checked_in_baggage: this.props.flightById.checked_in_baggage,
      price: this.props.flightById.price,
      notes: this.props.flightById.notes,
      user_id: this.props.flightById.user_id,
      trip_id: this.props.flightById.trip_id,
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const flightId = this.props.match.params.id;
    console.log("Setting flightId:", flightId);

    this.props.dispatch(getFlightById(flightId));
  }

  handleChange = (e) => {
    console.log("FlightEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.flightById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - FlightEdit - this.props:", this.props);
    console.log("\nhandleSubmit - FlightEdit - this.props.flightById.id:", this.props.flightById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editFlight(this.state, this.props.flightById.id));

    //Redirect to flight page
    this.props.history.push(`/flight/${this.props.flightById.id}`);
  }

  render() {
    console.log("FlightEdit - render - this.props:", this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Airlines</label>
          <input onChange={this.handleChange} type='text' name="airlines" defaultValue={this.props.flightById.airlines} />
          <br /><br />

          <label>Departure Time</label>
          <input onChange={this.handleChange} type='text' name="departure_time" defaultValue={this.props.flightById.departure_time} />
          <br /><br />

          <label>Arrival Time</label>
          <input onChange={this.handleChange} type='text' name="arrival_time" defaultValue={this.props.flightById.arrival_time} />
          <br /><br />

          <label>Reservation Code</label>
          <input onChange={this.handleChange} type='text' name="reservation_code" defaultValue={this.props.flightById.reservation_code} />
          <br /><br />

          <label>Baggage</label>
          <input onChange={this.handleChange} type='text' name="checked_in_baggage" defaultValue={this.props.flightById.checked_in_baggage} />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.flightById.price} />
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" defaultValue={this.props.flightById.notes} />
          <br /><br />


          <button type="submit">Update Flight</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flightById: state.flightById
  }
}

export default connect(mapStateToProps)(FlightEdit);