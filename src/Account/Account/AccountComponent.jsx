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

        </div>
        <div className="accountfeed">
        </div>
        <div className="accountbar">
          {/* <h3>Create a new trip:</h3> */}
          <button><i class="fas fa-suitcase"></i> Create new trip</button>
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