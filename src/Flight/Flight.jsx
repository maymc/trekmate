import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//-------Redux------//
import { connect } from 'react-redux';
import { getFlightsByTrip } from '../actions/actions';

class Flight extends Component {

  componentDidMount() {
    //This id comes from the url
    let flightId = this.props.match.params.id;
    console.log("Setting flightId:", flightId);
    console.log('\nFlight Component Mounted Successfully!');
    this.props.dispatch(getFlightsByTrip(flightId));
  }

  //App Component - render html elements
  render() {
    console.log('\nFlight.jsx - this.props.flightsByTripId:', this.props.flightsByTripId)

    return (this.props.flightsByTripId.map(flightElem => {
      return (
        <div key={flightElem.id}>
          <p>Airlines: {flightElem.airlines}</p>
          <p>Departure Time: {flightElem.departure_time}</p>
          <p>Arrival Time:{flightElem.arrival_time}</p>
          <p>Researvation Code:{flightElem.reservation_code}</p>
          <p># of Checked-In Baggage: {flightElem.checked_in_baggage}</p>
          <p>Price: {flightElem.price}</p>
          <p>Notes: {flightElem.notes}</p>

          <div>
            <Link to={`/flight/${flightElem.id}`}>
              <button type='button'>View</button>
            </Link>
          </div>
        </div>
      )
    })
    )
  }
}

const mapStateToProps = state => {
  return {
    flightsByTripId: state.flightsByTripId
  }
}
export default connect(mapStateToProps)(Flight);
