//Shows Trip details

import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { getTripById, getAccommodationsByTrip, getActivitiesByTrip, getFlightsByTrip, getTransitByTrip } from '../../actions/actions'; //part of Abby's template
// import Accommodation from '../../Accommodation/Accommodation';

// import { Collaborators } from '../Trip/collaboratorcomponent'

class TripComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    //Trip id comes from url
    let tripId = this.props.match.params.id;
    console.log("Setting tripId:", tripId);
    console.log("\nTripComponent Mounted Successfully");

    //GET details for trip, accommodations, activities, flights, and transit by trip_id
    this.props.dispatch(getTripById(tripId))
    this.props.dispatch(getAccommodationsByTrip(tripId))
    this.props.dispatch(getActivitiesByTrip(tripId))
    this.props.dispatch(getFlightsByTrip(tripId))
    this.props.dispatch(getTransitByTrip(tripId))
  }

  render() {
    // const trip = this.props.trip; //get trip by trip_id 
    // console.log('Trip props', trip)

    console.log("TripComponent - this.props:", this.props);

    return (
      <div className="trip">
        <div className="tripbanner">
          <div className="tripname">

          </div>
        </div>
        <div className="tripfeed">

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
  console.log('this is state', state)
  return {
    tripById: state.tripsById,
    accommodationsByTrip: state.accommodationsByTripId,
    activitiesByTrip: state.activitiesByTripId,
    flightsByTrip: state.flightsByTripId,
    transitByTrip: state.transitByTrip
  }
}


export default connect(mapStateToProps)(TripComponent);