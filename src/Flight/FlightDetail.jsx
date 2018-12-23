import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DateComponent from '../Global/Date/DateComponent'

//------Redux------//
import { connect } from 'react-redux';
import { getFlightById, deleteFlight } from '../actions/actions';
// import { timingSafeEqual } from 'crypto';

class FlightDetail extends Component {

  componentDidMount() {
    const flightId = this.props.match.params.id;
    this.props.dispatch(getFlightById(flightId));
  }
  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] = "Sunday";
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
  onClick = () => {
    let flightId = this.props.match.params.id;
    this.props.dispatch(deleteFlight(flightId))
  }

  render() {
    console.log("\nFlightDetail- this.props.flightById:", this.props.flightById)
    const flight = this.props.flightById


    return (
      <div key={this.props.flightById.id} className="container col12">
        <div className="pagebanner blue-bg">
          <i className="spacebottom fas fa-5x fa-plane"></i>
          <h1>{flight.airlines}</h1>
          <Link className="drk" to={`/users/account/${this.props.flightById.user_id}/trips/${this.props.flightById.trip_id}`} onClick={this.onClick}>
            Delete flight
          </Link>
        </div>
        <div className="pagebody">
          <Link to={`/users/account/${this.props.flightById.user_id}/trips/${this.props.flightById.trip_id}`}>
            <i className="fas fa-arrow-left"></i> Back to trip
          </Link>
          <h2 className="pink" >Review</h2>
          <div className="pagesection">
            <DateComponent date={this.dateFormatter(flight.departure_date)} />
            <DateComponent date={this.dateFormatter(flight.arrival_date)} />
            <p><i className="far fa-clock"></i> Departure time: {flight.departure_time}</p>
            <p><i className="far fa-clock"></i> Return time: {flight.arrival_time}</p>
          </div>
          <div className="pagesection">
            <h3 className="blue">Details</h3>
            <p><i className="fas fa-suitcase"></i> Checked Bags: {flight.checked_in_baggage}</p>
            <p><i className="fas fa-dollar-sign"></i> Price: {this.props.flightById.price}</p>
            <p><i className="fas fa-clipboard-check"></i> Reservation Code: {this.props.flightById.reservation_code}</p>
            <p><i className="far fa-sticky-note"></i> Notes: {this.props.flightById.notes}</p>
          </div>
          <Link to={`/flight/edit/${this.props.flightById.id}?${this.props.flightById.departure_date}?${this.props.flightById.arrival_date}`}>
            <button type='button'>Edit</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
  // {
  //   flightById: state.flightById
  // }
}
export default connect(mapStateToProps)(FlightDetail);

FlightDetail.defaultProps = {
  flightById: {
    id: null
  }
}