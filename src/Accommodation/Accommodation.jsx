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
        <div key={accommodationElem.id}>
          <p>Lodging: {accommodationElem.lodging_name}</p>
          <p>Address: {accommodationElem.address}</p>
          <p>Check-In Date:{accommodationElem.check_in_date}</p>
          <p>Check-Out Date:{accommodationElem.check_out_date}</p>
          <p>Price: {accommodationElem.price}</p>
          <p>Pay Status: {accommodationElem.is_paid}</p>
          <p>Reservation: {accommodationElem.reservation_code}</p>
          <p>Notes: {accommodationElem.notes}</p>
          <div>
            {/* <Link to={`/accommodations/edit/${accommodationElem.id}`}>
              <button type='button'>Edit Accommodation</button>
            </Link> */}
            <Link to={`/accommodation/${accommodationElem.id}`}>
              <button type='button'>View</button>
            </Link>
          </div>
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
