//Shows Trip details

import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DateComponent from '../../Global/Date/DateComponent'

//Redux
import { connect } from 'react-redux';
import { getAllByTrip } from '../../actions/actions';


class TripComponent extends Component {

  componentDidMount() {
    let tripId = this.props.match.params.trip_id;
    this.props.dispatch(getAllByTrip(tripId));

  }
  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      let month = [];
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEPT";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";

      // console.log('Date', d)
      return {
        day: weekday[d.getDay()],
        date: d.getDate(),
        month: month[d.getMonth()],
        year: d.getFullYear()
  
      }
    }
  }

  render() {
    console.log("TripComponent - this.props:", this.props);
    const trips = this.props.trips;
    let startDate = this.dateFormatter(this.props.trips.start_date)
    let endDate = this.dateFormatter(this.props.trips.end_date)
    // console.log('Start date', startDate, endDate)
    return (
      <div className="container col12 trip" key={trips.id}>
        <div className="tripbanner">
          <div className="tripname">
            <h1>{trips.city}<span>, {trips.country}</span></h1>
  

            <Link className="drk" to={`/trips/edit/${trips.id}?${trips.user_id}`}>Edit trip</Link>
          </div>
          <div className="tripdates">
            <DateComponent date={startDate} />
            <DateComponent date={endDate} />
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
          <Link to={`/accommodations/add?${trips.user_id}?${trips.id}`}>
            <button><i className="fas fa-hotel"></i> Accommodation</button>
          </Link>
          <Link to={`/activities/add?${this.props.trips.id}`}>
            <button ><i className="fas fa-hiking"></i> Activity</button>
          </Link>
          <Link to={`/flights/add?${this.props.trips.id}`}>
            <button><i className="fas fa-plane"></i> Flight</button>
          </Link>
          <Link to={`/transit/add?${this.props.trips.id}`}>
            <button><i className="fas fa-car-side"></i> Transit</button>
          </Link>
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