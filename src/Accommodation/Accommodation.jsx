import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getAccommodationsByTrip } from '../actions/actions';

class Accommodation extends Component {

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const tripId = this.props.match.params.id;
    console.log("Setting tripId:", tripId);
    console.log('\nAccommodation Component Mounted Successfully!');
    // this.props.dispatch(getAllAccommodations());
    this.props.dispatch(getAccommodationsByTrip(tripId));
  }

  //App Component - render html elements
  render() {
    console.log('\nAccommodations.jsx - this.props.accommodationsByTripId:', this.props.accommodationsByTripId)

    return this.props.accommodationsByTripId.map(accommodationElem => {
      return (
        <div className="event">

        </div>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations,
    accommodationsByTripId: state.accommodationsByTripId
  }
}

export default connect(mapStateToProps)(Accommodation);
