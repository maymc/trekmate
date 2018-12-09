import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';    //part of Abby's template
<<<<<<< HEAD
import { getTrip, getAccommodationByTrip, getActivityByTrip, getTransitByTrip, getFlightByTrip, getAllByTrip } from '../../actions/actions'; //part of Abby's template
=======
import { getTrip, getAccommodationsByTrip, getActivitiesByTrip, getTransitByTrip, getFlightsByTrip } from '../../actions/actions'; //part of Abby's template
>>>>>>> 9ad634aaf64e1cbec1ef03b4cb0bacd280b6b73a
// import Accommodation from '../../Accommodation/Accommodation';

// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  componentDidMount() {
    // this.props.dispatch(getAllTrips());   //part of Abby's template
    let tripId = this.props.match.params.id;

    //get trip, accommodations, activities, transits, flights by trip_id
<<<<<<< HEAD
    // this.props.dispatch(getTrip(tripId))
    // this.props.dispatch(getAccommodationByTrip(tripId))
    // this.props.dispatch(getActivityByTrip(tripId))
    // this.props.dispatch(getTransitByTrip(tripId))
    // this.props.dispatch(getFlightByTrip(tripId))
    this.props.dispatch(getAllByTrip(tripId));
  }

  render() {
    const trips = this.props.trips; //get trip by trip_id 
    console.log('this.props', trips)
    // return accommodations.map(item => {
    //   return (
    //     <div>{item.lodging_name}</div>
    //   )
    // })
    // let first = trip[0];
    // console.log('first object: ', trip.map(item => {
    //   return (<div>hello</div>)
    // }))
=======
    this.props.dispatch(getTrip(tripId))
    this.props.dispatch(getAccommodationsByTrip(tripId))
    this.props.dispatch(getActivitiesByTrip(tripId))
    this.props.dispatch(getTransitByTrip(tripId))
    this.props.dispatch(getFlightsByTrip(tripId))
  }

  render() {
    const trip = this.props.trip; //get trip by trip_id 
    console.log('Trip props', trip)
>>>>>>> 9ad634aaf64e1cbec1ef03b4cb0bacd280b6b73a

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
  return state;
}


export default connect(mapStateToProps)(Trip);