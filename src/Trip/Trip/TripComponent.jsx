import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { getAllByTrip } from '../../actions/actions';
// import Accommodation from '../../Accommodation/Accommodation';
// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  componentDidMount() {
    let tripId = this.props.match.params.id;
    this.props.dispatch(getAllByTrip(tripId));
  }

  render() {
    const trips = this.props.trips;
    return (
      <div className="trip">
        <div className="tripbanner">
          <div className="tripname">

            {/* example to render trip by trip_id  */}
            Your Trip: {trips.city}
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

          {/* example to render accommodations by trip_id */}
          Accommodation By Trip: <AccommodationByTrip accommodations={this.props.accommodations} />
          <br />
          {/* example to render activities by trip_id */}
          Activity By Trip: <ActivityByTrip activities={this.props.activities} />
          <br />
          {/* example to render transits by trip_id */}
          Transit By Trip: <TransitByTrip transit={this.props.transit} />
          <br />
          {/* example to render flights by trip_id */}
          Flight By Trip: <FlightByTrip flights={this.props.flights} />

        </div>
      </div>
    );

  }
}

const AccommodationByTrip = (props) => {
  return props.accommodations.map(item => {
    return (
      <div key={item.id}>{item.lodging_name}</div>
    )
  })
}
const ActivityByTrip = (props) => {
  return props.activities.map(item => {
    return (
      <div key={item.id}>{item.activity_name}</div>
    )
  })
}
const TransitByTrip = (props) => {
  return props.transit.map(item => {
    return (
      <div key={item.id}>{item.type}</div>
    )
  })
}

const FlightByTrip = (props) => {
  return props.flights.map(item => {
    return (
      <div key={item.id}>{item.airlines}</div>
    )
  })
}

const mapStateToProps = state => {
  return state;
}


export default connect(mapStateToProps)(Trip);