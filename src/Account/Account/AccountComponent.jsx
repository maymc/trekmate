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
        <p>{users.first_name}</p>
        <p>{users.last_name}</p>
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