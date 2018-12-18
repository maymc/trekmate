import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getFlightById } from '../actions/actions';

class FlightDetail extends Component {

  componentDidMount() {
    const flightId = this.props.match.params.id;
    console.log("Setting flightId:", flightId);
    console.log("Flight Detail component Mounted Successfully");

    this.props.dispatch(getFlightById(flightId));
  }

  render() {
    console.log("\nFlightDetail- this.props.flightById:", this.props.flightById)

    return <div>Flight</div>
    // (
    //   <div key={this.props.flightById.id}>
    //     <p>Airlines: {this.props.flightById.airlines}</p>
    //     <p>Departure Time: {this.props.flightById.departure_time}</p>
    //     <p>Arrival Time:{this.props.flightById.arrival_time}</p>
    //     <p>Researvation Code:{this.props.flightById.reservation_code}</p>
    //     <p># of Checked-In Baggage: {this.props.flightById.checked_in_baggage}</p>
    //     <p>Price: {this.props.flightById.price}</p>
    //     <p>Notes: {this.props.flightById.notes}</p>

    //     <Link to={`/flight/edit/${this.props.flightById.id}`}>
    //       <button type='button'>Edit Activity</button>
    //     </Link>

    //     <Link to={`/flights/trip/${this.props.flightById.trip_id}`}>
    //       <button type='button'>Back</button>
    //     </Link>
    //   </div>

    // )
  }
}

const mapStateToProps = state => {
  return {
    flightById: state.flightById
  }
}
export default connect(mapStateToProps)(FlightDetail);