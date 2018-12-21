//Shows Trip details

import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DateComponent from '../../Global/Date/DateComponent'
import EventCard from './EventCardComponent'

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

  render() {
    console.log("TripComponent - this.props:", this.props);
    const trips = this.props.trips;

    return (
      <div className="container col12 trip" key={trips.id}>
        <div className="tripbanner">
          <div className="tripname">
            <h1>{trips.city}<span>, {trips.country}</span></h1>


            <Link className="drk" to={`/trips/edit/${trips.id}?${trips.id}?${trips.user_id}`}>Edit trip</Link>
          </div>
          <div className="tripdates">
            <DateComponent date={this.dateFormatter(trips.start_date)} />
            <DateComponent date={this.dateFormatter(trips.end_date)} />
          </div>
        </div>
        <div className="tripfeed">
          <div className="eventsection">
            <h3 className="grey spacebottom"><i className="fas fa-plane"></i> Flights</h3>
            {this.props.flights.map(flight => {
              return (
                <EventCard key={flight.id} type={'flight'} detail={flight} title={flight.airlines} date={this.dateFormatter(flight.departure_date)} time={flight.departure_time} />
              )
            })}
            <Link to={`/flights/add?${trips.user_id}?${trips.id}`}>+ Add a flight</Link>
          </div>
          <div className="eventsection">
            <h3 className="grey spacebottom"><i className="fas fa-hotel"></i> Accommodations</h3>
            {this.props.accommodations.map(accommodation => {
              return (
                <EventCard key={accommodation.id} type={'accommodation'} detail={accommodation} title={accommodation.lodging_name} date={this.dateFormatter(accommodation.check_in_date)} />
              )
            })}
            <Link to={`/accommodations/add?${trips.user_id}?${trips.id}`}>+ Add an accommodation</Link>
          </div>
          <div className="eventsection">
            <h3 className="grey"><i className="fas fa-hiking"></i> Activities</h3>
            {this.props.activities.map(activity => {
              return (
                <EventCard key={activity.id} type={'actvity'} detail={activity} title={activity.activity_name} date={this.dateFormatter(activity.date)} time={activity.time} />
              )
            })}
            <Link to={`/activities/add?${trips.user_id}?${trips.id}`}>+ Add an activity</Link>
          </div>
          <div className="eventsection">
            <h3 className="grey spacebottom"><i className="fas fa-car-side"></i> Transit</h3>
            {this.props.transit.map(transit => {
              return (
                <EventCard key={transit.id} type={'transit'} detail={transit} title={transit.type} date={this.dateFormatter(transit.date)} time={transit.time} />
              )
            })}
            <Link to={`/transit/add?${trips.user_id}?${trips.id}`}>+ Add a transit event</Link>
          </div>
        </div>

        <div className="tripbar">
          <h3 className="grey" >Add event:</h3>
          <Link to={`/flights/add?${trips.user_id}?${trips.id}`}>
            <button className="ghost" ><i className="fas fa-plane"></i> Flight</button>
          </Link>
          <Link to={`/accommodations/add?${trips.user_id}?${trips.id}`}>
            <button className="ghost" ><i className="fas fa-hotel"></i> Accommodation</button>
          </Link>
          <Link to={`/activities/add?${trips.user_id}?${trips.id}`}>
            <button className="ghost" ><i className="fas fa-hiking"></i> Activity</button>
          </Link>
          <Link to={`/transit/add?${trips.user_id}?${trips.id}`}>
            <button className="ghost"><i className="fas fa-car-side"></i> Transit</button>
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