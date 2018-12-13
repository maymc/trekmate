//Shows Trip details

import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getTripById, getAccommodationsByTrip, getActivitiesByTrip, getFlightsByTrip, getTransitByTrip, getUserById } from '../../actions/actions';


class TripComponent extends Component {

  componentDidMount() {
    const trip_id = this.props.match.params.trip_id;
    const user_id = this.props.match.params.user_id;
    
    this.props.dispatch(getUserById(user_id));
    this.props.dispatch(getTripById(trip_id));
    this.props.dispatch(getAccommodationsByTrip(trip_id));
    this.props.dispatch(getActivitiesByTrip(trip_id));
    this.props.dispatch(getFlightsByTrip(trip_id));
    this.props.dispatch(getTransitByTrip(trip_id));
  }
  dateFormatter(data) {
    console.log('dateFormatter', data)
    // let dates = data.split("t")
  }

  render() {
    console.log("TripComponent - this.props:", this.props);

    let startDate = this.dateFormatter(this.props.tripById.start_date)
    return (
      <div className="container trip">
        <div className="tripbanner">
          <div className="tripname">

            <h1>{this.props.tripById.city}<span>, {this.props.tripById.country}</span></h1>

            {/* example to render trip by trip_id 
            {/* Your Trip: {trips.city} */}

            {/* Trip Info */}
            {/* <h2>Trip Details</h2>
            <p>City: {this.props.tripById.city}</p>
            <p>State: {this.props.tripById.state}</p>
            <p>Country: {this.props.tripById.country}</p>
            <p>Start Date: {this.props.tripById.start_date}</p>
            <p>End Date: {this.props.tripById.end_date}</p>

            <Link to={`/trips/edit/${this.props.tripById.id}`}>Edit</Link> */}
          </div> 
          <div className="tripdates">

          </div>
        </div>

        {/* Display all data for specific trip for the user */}
        <div className="tripfeed">
          {/* Display flights for the trip */}
          {this.props.flightsByTrip.map(flight => {
            return (
              <div>
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
          {/* {this.props.accommodationsByTrip.map(accommodation => {
            return (
              <div>
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
          })} */}

          {/* Display activities for the trip */}
          {/* {this.props.activitiesByTrip.map(activity => {
            return (
              <div>
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
                <img src={activity.image} />
              </div>
            )
          })} */}

          {/* Display transit for the trip */}
          {/* {this.props.transitByTrip.map(transit => {
            return (
              <div>
                <h2>Transit</h2>
                <p>Type: {transit.type}</p>
                <p>Date: {transit.date}</p>
                <p>Time: {transit.time}</p>
                <p>Reservation: {transit.reservation}</p>
                <p>Price: {transit.price}</p>
              </div>
            )
          })} */}

          {/* Abby's code */}
          {/* example to render accommodations by trip_id */}
          {/* Accommodation By Trip: <AccommodationByTrip accommodations={this.props.accommodations} /> */}
          <br />
          {/* example to render activities by trip_id */}
          {/* Activity By Trip: <ActivityByTrip activities={this.props.activities} /> */}
          <br />
          {/* example to render transits by trip_id */}
          {/* Transit By Trip: <TransitByTrip transit={this.props.transit} /> */}
          <br />
          {/* example to render flights by trip_id */}
          {/* Flight By Trip: <FlightByTrip flights={this.props.flights} /> */}


        </div>

        <div className="tripbar">
          <h3>Add event:</h3>
          <Link to={`/accommodations/add?${this.props.userById.id}?${this.props.tripById.id}`}>
            <button><i className="fas fa-hotel"></i> Accommodation</button>
          </Link>
          <Link to={`/activities/add?${this.props.tripById.id}`}>
            <button ><i className="fas fa-hiking"></i> Activity</button>
          </Link>
          <Link to={`/flights/add?${this.props.tripById.id}`}>
            <button><i className="fas fa-plane"></i> Flight</button>
          </Link>
          <Link to={`/transit/add?${this.props.tripById.id}`}>
            <button><i className="fas fa-car-side"></i> Transit</button>
          </Link>
        </div>
      </div>
    );

  }
}

// const AccommodationByTrip = (props) => {
//   return props.accommodations.map(item => {
//     return (
//       <div key={item.id}>{item.lodging_name}</div>
//     )
//   })
// }
// const ActivityByTrip = (props) => {
//   return props.activities.map(item => {
//     return (
//       <div key={item.id}>{item.activity_name}</div>
//     )
//   })
// }
// const TransitByTrip = (props) => {
//   return props.transit.map(item => {
//     return (
//       <div key={item.id}>{item.type}</div>
//     )
//   })
// }

// const FlightByTrip = (props) => {
//   return props.flights.map(item => {
//     return (
//       <div key={item.id}>{item.airlines}</div>
//     )
//   })
// }

const mapStateToProps = state => {
  // return state;
  console.log('TripComponent - This is state:', state)
  return {
    userById: state.userById,
    tripById: state.tripById,
    accommodationsByTrip: state.accommodationsByTripId,
    activitiesByTrip: state.activitiesByTripId,
    flightsByTrip: state.flightsByTripId,
    transitByTrip: state.transitByTripId
  }
}


export default connect(mapStateToProps)(TripComponent);