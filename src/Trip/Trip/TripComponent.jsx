import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { getAllTrips } from '../../actions/actions';
class Trip extends Component {

  componentDidMount() {
    this.props.dispatch(getAllTrips());
  }
  render() {
    const trips = this.props.trips;
    return trips.map(item => {
      return (
        <div key={item.id}>
          city name: {item.city}
        </div>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    trips: state,
  }
}


export default connect(mapStateToProps)(Trip);