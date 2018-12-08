import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getActivityById } from '../actions/actions';

class ActivityDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const activityId = this.props.match.params.id;
    console.log("Setting activityId:", activityId);
    console.log("Activity Detail component Mounted Successfully");

    this.props.dispatch(getActivityById(activityId));
  }

  render() {
    console.log("\nActivityDetail- this.props.activityById:", this.props.activityById)

    return (
      <div key={this.props.activityById.id}>
        <p>Activity: {this.props.activityById.activity_name}</p>
        <p>Location: {this.props.activityById.location}</p>
        <p>Date:{this.props.activityById.date}</p>
        <p>Time:{this.props.activityById.time}</p>
        <p>Price: {this.props.activityById.price}</p>
        <p>Type: {this.props.activityById.type}</p>
        <p>Votes: {this.props.activityById.votes}</p>
        <p>Reservation: {this.props.activityById.reservation}</p>
        <p>Notes: {this.props.activityById.notes}</p>
        <img src={this.props.activityById.image}></img>
        <Link to={`/activity/edit/${this.props.activityById.id}`}>
          <button type='button'>Edit Activity</button>
        </Link>
        <Link to={`/activities/trip/${this.props.activityById.trip_id}`}>
          <button type='button'>Back</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // accommodations: state.accommodations,
    // accommodationById: state.accommodationById
    activityById: state.activityById
  }
}
export default connect(mapStateToProps)(ActivityDetail);