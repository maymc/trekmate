import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getTransitByTrip } from '../actions/actions';

class Transit extends Component {

  componentDidMount() {
    //This id comes from the url
    const transitId = this.props.match.params.id;
    console.log("Setting transitId:", transitId);
    console.log('\nTransit Component Mounted Successfully!');
    this.props.dispatch(getTransitByTrip(transitId));
  }

  render() {
    console.log('\nTransit.jsx - this.props.transitByTripId:', this.props.transitByTripId)

    return this.props.transitByTripId.map(transitElem => {
      return (
        <div key={transitElem.id}>
          <p>Type: {transitElem.type}</p>
          <p>Date: {transitElem.date}</p>
          <p>Time:{transitElem.time}</p>
          <p>Reservation: {transitElem.reservation}</p>
          <p>Price: {transitElem.price}</p>
          <div>
            <Link to={`/transit/${transitElem.id}`}>
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
    transitByTripId: state.transitByTripId
  }
}

export default connect(mapStateToProps)(Transit);
