//Shows Trip details

import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getAllByTrip } from '../../actions/actions';


class TripComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    let tripId = this.props.match.params.trip_id;
    this.props.dispatch(getAllByTrip(tripId));

  }

  render() {
    const trips = this.props.trips;
    return (
      <div className="container col12 trip" key={trips.id}>
        <div className="tripbanner">
          <div className="tripname">
            {/* User Info */}
            <p>{trips.first_name}</p>
            <p>{trips.last_name}</p>
            <br />

            {/* example to render trip by trip_id  */}
            <div>Your Trip: {trips.city} </div>

            {/* Trip Info */}
            <h2>Trip Details</h2>
            <p>City: {trips.city}</p>
            <p>State: {trips.state}</p>
            <p>Country: {trips.country}</p>
            <p>Start Date: {trips.start_date}</p>
            <p>End Date: {trips.end_date}</p>

            <Link to={`/trips/edit/${trips.id}`}>Edit</Link>
          </div>
        </div>

        {/* Display all data for specific trip for the user */}
        <div className="tripfeed">
          {/* Display flights for the trip */}
          {this.props.flights.map(flight => {
            return (
              <div key={flight.id}>
                <h2>Flight</h2>
                <p>Airlines: {flight.airlines}</p>
                <p>Departure Time: {flight.departure_time}</p>
                <p>Arrival Time: {flight.arrival_time}</p>
                <p>Reservation Code: {flight.reservation_code}</p>
                <p>Checked-In Bags: {flight.checked_in_baggage}</p>
                <p>Price: {flight.price}</p>
                <p>Notes: {flight.notes}</p>
              </div>
            )
          })}
          {/* Display Accommodations for the trip */}
          {this.props.accommodations.map(accommodation => {
            return (
              <div key={accommodation.id}>
                <h2>Accommodation</h2>
                <p>Lodging: {accommodation.lodging_name}</p>
                <p>Address: {accommodation.address}</p>
                <p>Check-In Date: {accommodation.check_in_date}</p>
                <p>Checkout Date: {accommodation.check_out_date}</p>
                <p>Price: {accommodation.price}</p>
                <p>Pay Status: {accommodation.is_paid}</p>
                <p>Reservation Code: {accommodation.reservation_code}</p>
                <p>Notes: {accommodation.notes}</p>
              </div>
            )
          })}

          {/* Display activities for the trip */}
          {this.props.activities.map(activity => {
            return (
              <div key={activity.id}>
                <h2>Activity</h2>
                <p>Activity: {activity.activity_name}</p>
                <p>Location: {activity.location}</p>
                <p>Date: {activity.date}</p>
                <p>Time: {activity.time}</p>
                <p>Price: {activity.price}</p>
                <p>Type: {activity.type}</p>
                <p>Votes: {activity.votes}</p>
                <p>Reservation: {activity.reservation}</p>
                <p>Notes: {activity.notes}</p>
                <img src={activity.image} alt='' />
              </div>
            )
          })}

          {/* Display transit for the trip */}
          {this.props.transit.map(transit => {
            return (
              <div key={transit.id}>
                <h2>Transit</h2>
                <p>Type: {transit.type}</p>
                <p>Date: {transit.date}</p>
                <p>Time: {transit.time}</p>
                <p>Reservation: {transit.reservation}</p>
                <p>Price: {transit.price}</p>
              </div>
            )
          })}

        </div>

        <div className="tripbar">
          <h3>Add event:</h3>
          <button><i className="fas fa-hiking"></i> Activity</button>
          <button><i className="fas fa-plane"></i> Flight</button>
          <button><i className="fas fa-car-side"></i> Transit</button>
          <button><i className="fas fa-hotel"></i> Accommodation</button>
        </div>
      </div>
    );

  }
}


const mapStateToProps = state => {
  // return state;
  console.log('TripComponent - This is state:', state)
  return state;
}


export default connect(mapStateToProps)(TripComponent);