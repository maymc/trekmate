import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//-------Redux------//
import { connect } from 'react-redux';
import { getActivitiesByTrip } from '../actions/actions';

class Activity extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //This id comes from the url
    let activityId = this.props.match.params.id;
    this.props.dispatch(getActivitiesByTrip(activityId));
  }

  //App Component - render html elements
  render() {
    console.log('\nActivity.jsx - this.props.activitiesByTripId:', this.props.activitiesByTripId)

    return (this.props.activitiesByTripId.map(activityElem => {
      return (
        <div key={activityElem.id}>
          <p>Activity: {activityElem.activity_name}</p>
          <p>Location: {activityElem.location}</p>
          <p>Date:{activityElem.date}</p>
          <p>Time:{activityElem.time}</p>
          <p>Price: {activityElem.price}</p>
          <p>Type: {activityElem.type}</p>
          <p>Votes: {activityElem.votes}</p>
          <p>Reservation: {activityElem.reservation}</p>
          <p>Notes: {activityElem.notes}</p>
          <img src={activityElem.image}></img>

          <div>
            <Link to={`/activity/${activityElem.id}`}>
              <button type='button'>View</button>
            </Link>
          </div>
        </div>
      )
    })
    )
  }
}

const mapStateToProps = state => {
  return {
    activitiesByTripId: state.activitiesByTripId
  }
}

export default connect(mapStateToProps)(Activity);
