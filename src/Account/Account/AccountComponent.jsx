import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { getUser } from '../../actions/actions';

class Account extends Component {

  componentDidMount() {
    let user = this.props.match.params.id;
    this.props.dispatch(getUser(user))
  }

  render() {
    const { users } = this.props;
    console.log('accommodation prop:', users)
    return (
      <div className="account">
        <div className="accountbanner">
          <h1>{users.first_name}</h1><h3>,{users.last_name}</h3>
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