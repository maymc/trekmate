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
    console.log('accommodation prop:', users)
    return (
      <div className="account">
        Test account
        {/* <Link to='/account/editAccount'>Edit Account</Link> */}
        {/* <Route path='' component={EditAccountComponent} /> */}
        {/* <Link to='/activities/activityEdit'>Activity Edit</Link> */}
        {/* <Route path='' component={ActivityEdit} /> */}
        <Route path='' component={TransitEdit} />



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