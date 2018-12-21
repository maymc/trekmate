import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DateComponent from '../Global/Date/DateComponent'

//------Redux------//
import { connect } from 'react-redux';
import { getTransitById } from '../actions/actions';

class TransitDetail extends Component {

  componentDidMount() {
    const transitId = this.props.match.params.id;
    console.log("Setting transitId:", transitId);
    console.log("Transit Detail component Mounted Successfully");

    this.props.dispatch(getTransitById(transitId));
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
    console.log("\nTransitDetail- this.props.transitById:", this.props.transitById)
    const transit = this.props.transitById

    return (
      <div key={this.props.transitById.id} className="container col12">
        <div className="pagebanner blue-bg">
          <i className="spacebottom fas fa-5x fa-car-side"></i>
          <h1>{transit.type}</h1>
          <Link className="drk" to={`/transit/trip/${transit.trip_id}`}>
            Delete transit
          </Link>
        </div>
        <div className="pagebody">
          <Link to={`/users/account/${transit.user_id}/trips/${transit.trip_id}`}>
            <i className="fas fa-arrow-left"></i> Back to trip
          </Link>
          <h2 className="pink" >Review</h2>
          <div className="pagesection">
            <DateComponent date={this.dateFormatter(transit.date)} />
          </div>
          <div className="pagesection">
            <h3 className="blue" >Details</h3>
            <p><i className="far fa-clock"></i> Time: {transit.time}</p>
            <p><i className="fas fa-dollar-sign"></i> Price: {transit.price}</p>
            <p><i className="fas fa-clipboard-check"></i> Reservation: {transit.reservation}</p>
          </div>
          <Link to={`/transit/edit/${transit.id}`}>
              <button type='button'>Edit</button>
          </Link>
        </div>
        {/* <p>Type: {this.props.transitById.type}</p
        

        <Link to={`/transit/edit/${this.props.transitById.id}`}>
          <button type='button'>Edit Activity</button>
        </Link>

        <Link to={`/transit/trip/${this.props.transitById.trip_id}`}>
          <button type='button'>Back</button>
        </Link> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transitById: state.transitById
  }
}
export default connect(mapStateToProps)(TransitDetail);

TransitDetail.defaultProps = {
  transitById: {
    id: null,
  }
}