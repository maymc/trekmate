import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
import ActivityEdit from '../../Activity/ActivityEdit.jsx';
import TransitEdit from '../../Transit/TransitEdit.jsx';

import { connect } from 'react-redux';
import { getUser } from '../../actions/actions';

class Account extends Component {

  componentDidMount() {
    let user = this.props.match.params.id;
    this.props.dispatch(getUser(user))
  }

  render() {
    const { users } = this.props;
    console.log('user prop:', users)
    return (
      <div className="account">
        <div className="accountbanner">
          <div className="userimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5av85FUBFtE6pEih8IFJHXT5Z4VT6xKS0EIdifBdqlhcIfkLfQQ" alt="User image"></img>
          </div>
          <div className="userdata">
            <h1>{users.first_name}<span>, {users.last_name}</span></h1>
            <p>{users.email}</p>
            <Link to={`/account/edit/${users.id}`}>Edit</Link>
            <Link to={`/account/edit_password/${users.id}`} >Update Password</Link>
          </div>
        </div>
        <div className="accountfeed">
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
    users: state,
  }
}
export default connect(mapStateToProps)(Account);