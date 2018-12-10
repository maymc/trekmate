import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Import JSX components
// import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
// import ActivityEdit from '../../Activity/ActivityEdit.jsx';
// import TransitEdit from '../../Transit/TransitEdit.jsx';

//Redux
import { connect } from 'react-redux';
import { getUserById, getTripsByUserId } from '../../actions/actions';

class Account extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.match.params.id;
    console.log("Setting userId:", userId);
    console.log("\nAccountComponent Mounted Successfully");

    this.props.dispatch(getUserById(userId));
    this.props.dispatch(getTripsByUserId(userId));
  }

  render() {
    console.log("\nAccountComponent - this.props:", this.props);

    return (
      <div className="container col3 account">
        <div className="accountbanner">
          <div className="userimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5av85FUBFtE6pEih8IFJHXT5Z4VT6xKS0EIdifBdqlhcIfkLfQQ" alt="User image"></img>
          </div>
          <div className="userdata">
            <h1>{this.props.userById.first_name}<span>, {this.props.userById.last_name}</span></h1>
            <p>{this.props.userById.email}</p>
            <Link to={`/users/account/edit/${this.props.userById.id}`}>Edit</Link>
            <Link to={`/users/account/edit_password/${this.props.userById.id}`} >Update Password</Link>
          </div>
        </div>

        <div className="accountfeed">
          {this.props.tripsByUserId.map(trip => {
            return (
              //Might need an if statement if state or country doesn't exist based on trip location
              <div>
                <p>{trip.city}</p>
                <p>{trip.state}</p>
                <p>{trip.country}</p>
                <p>{trip.start_date}</p>
                <p>{trip.end_date}</p>

                <form method="get" action={`/users/account/${trip.user_id}/trips/${trip.id}`}>
                  <button type="submit">View trip</button>
                </form>

              </div>
            )
          })}

        </div>

        <div className="accountbar">
          {/* <h3>Create a new trip:</h3> */}
          <form method="get" action="/trips/add">
            <button type="submit"><i className="fas fa-suitcase"></i> Create new trip</button>
          </form>
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