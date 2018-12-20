import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import DateComponent from '../../Global/Date/DateComponent'

//Import JSX components
// import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
// import ActivityEdit from '../../Activity/ActivityEdit.jsx';
// import TransitEdit from '../../Transit/TransitEdit.jsx';

//Redux
import { connect } from 'react-redux';
import { getUserById, getTripsByUserId } from '../../actions/actions';

class Account extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    let userId = this.props.match.params.id;
    console.log("Setting userId:", userId);
    console.log("\nAccountComponent Mounted Successfully");

    this.props.dispatch(getUserById(userId));
    this.props.dispatch(getTripsByUserId(userId));
  }

  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] =  "Sunday";
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
    console.log("\nAccountComponent - this.props:", this.props);

    return (
      <div className="container col3 account">
        {/* <div className="accountbanner">
          <div className="userimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5av85FUBFtE6pEih8IFJHXT5Z4VT6xKS0EIdifBdqlhcIfkLfQQ" alt="User_image"></img>
          </div>
          <div className="userdata">
            <h1>{this.props.userById.first_name}<span>, {this.props.userById.last_name}</span></h1>
            <p>{this.props.userById.email}</p>
            <Link to={`/users/account/edit/${this.props.userById.id}`}>Edit</Link>
            <Link to={`/users/account/edit_password/${this.props.userById.id}`} >Update Password</Link>
          </div>
        </div> */}

        <div className="accountfeed">
          {this.props.tripsByUserId.map(trip => {
            return (
              //Might need an if statement if state or country doesn't exist based on trip location
                <form className="triplist" method="get" action={`/users/account/${trip.user_id}/trips/${trip.id}`}>
                <div className="triptitle">
                  <h1>{trip.city}<span>, {trip.country}</span></h1>
                </div>
                <div className="tripbutton">
                  <button className="drk" type="submit">View trip</button>
                </div>
                <div className="tripdates">
                  <DateComponent date={this.dateFormatter(trip.start_date)} />
                  <DateComponent date={this.dateFormatter(trip.end_date)} />
                </div>
                </form>
            )
          })}

        </div>

        <div className="accountbar">
          <div className="userimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5av85FUBFtE6pEih8IFJHXT5Z4VT6xKS0EIdifBdqlhcIfkLfQQ" alt="User_image"></img>
          </div>
          <div className="userdata">
            <h1>{this.props.userById.first_name}<span>, {this.props.userById.last_name}</span></h1>
            <p>{this.props.userById.email}</p>
            <Link to={`/users/account/edit/${this.props.userById.id}`}>Edit</Link>
            <Link to={`/users/account/edit_password/${this.props.userById.id}`} >Update Password</Link>
          </div>
          {/* <h3>Create a new trip:</h3> */}
          <Link to={`/trips/add?${this.props.userById.id}`}>
            <button type="submit"><i className="fas fa-suitcase"></i> Create new trip</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userById: state.userById,
    tripsByUserId: state.tripsByUserId
  }
}
export default connect(mapStateToProps)(Account);