import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';    //part of Abby's template
import { getTrip, getAccommodationByTrip, getActivityByTrip, getTransitByTrip, getFlightByTrip } from '../../actions/actions'; //part of Abby's template
// import Accommodation from '../../Accommodation/Accommodation';

// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  componentDidMount() {
    // this.props.dispatch(getAllTrips());   //part of Abby's template
    let tripId = this.props.match.params.id;

    //get trip, accommodations, activities, transits, flights by trip_id
    this.props.dispatch(getTrip(tripId))
    this.props.dispatch(getAccommodationByTrip(tripId))
    this.props.dispatch(getActivityByTrip(tripId))
    this.props.dispatch(getTransitByTrip(tripId))
    this.props.dispatch(getFlightByTrip(tripId))
  }

  render() {
    const trip = this.props.trip; //get trip by trip_id 
    console.log('Trip props', trip)

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
    trip: state.trip,
    accommodation: state.accommodation,
    activity: state.activity,
    transit: state.transit,
    flight: state.flight
  }
}


export default connect(mapStateToProps)(Trip);