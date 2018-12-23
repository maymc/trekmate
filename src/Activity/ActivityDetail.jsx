import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DateComponent from '../Global/Date/DateComponent'

//------Redux------//
import { connect } from 'react-redux';
import { getActivityById } from '../actions/actions';

class ActivityDetail extends Component {

  componentDidMount() {
    const activityId = this.props.match.params.id;
    console.log("Setting activityId:", activityId);
    console.log("Activity Detail component Mounted Successfully");
    this.props.dispatch(getActivityById(activityId));
  }

  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      let month = [];
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEPT";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";

      // console.log('Date', d)
      return {
        day: weekday[d.getDay()],
        date: d.getDate(),
        month: month[d.getMonth()],
        year: d.getFullYear()

      }
    }
  }

  render() {
    console.log("\nActivityDetail- this.props.activityById:", this.props.activityById)
    let activity = this.props.activityById
    return (
      <div className="container col12" key={this.props.activityById.id}>
      <div className="pagebanner blue-bg">
        <i className="spacebottom fas fa-5x fa-hiking"></i>
        <h1>{activity.activity_name}</h1>
        <Link className="drk" to={`/activity/trip/${activity.trip_id}`}>
            Delete activity
        </Link>
      </div>
      <div className="pagebody">
        <Link to={`/users/account/${activity.user_id}/trips/${activity.trip_id}`}>
          <i className="fas fa-arrow-left"></i> Back to trip
        </Link>
        <h2 className="pink" >Review</h2>
        <div className="pagesection">
            <DateComponent date={this.dateFormatter(activity.date)} />
            <p><i className="far fa-clock"></i> Time: {activity.time}</p>
        </div>
        <div className="pagesection">
          <h3 className="blue" >Details</h3>
          <p><i className="fas fa-certificate"></i> Type: {activity.type}</p>
          <p><i className="fas fa-map-marker-alt"></i> Location: {activity.location}</p>
          <p><i className="fas fa-dollar-sign"></i> Price: {activity.price}</p>
          <p><i className="fas fa-clipboard-check"></i> Reservation: {activity.reservation}</p>
          <p><i className="far fa-sticky-note"></i> Notes: {activity.notes}</p>
        </div>
        <Link to={`/activity/edit/${activity.id}?${activity.date}`}>
              <button type='button'>Edit</button>
        </Link>
        

      </div>

        {/* <p>Activity: {this.props.activityById.activity_name}</p>
        <p>Location: {this.props.activityById.location}</p>
        <p>Date:{this.props.activityById.date}</p>
        <p>Time:{this.props.activityById.time}</p>
        <p>Price: {this.props.activityById.price}</p>
        <p>Type: {this.props.activityById.type}</p>
        <p>Votes: {this.props.activityById.votes}</p>
        <p>Reservation: {this.props.activityById.reservation}</p>
        <p>Notes: {this.props.activityById.notes}</p>
        <img src={this.props.activityById.image} alt=''></img>

        <Link to={`/activity/edit/${this.props.activityById.id}`}>
          <button type='button'>Edit Activity</button>
        </Link>

        <Link to={`/activities/trip/${this.props.activityById.trip_id}`}>
          <button type='button'>Back</button>
        </Link> */}
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

ActivityDetail.defaultProps = {
  activityById: {
    id: null,
  }
}