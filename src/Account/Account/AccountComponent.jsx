import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
import ActivityEdit from '../../Activity/ActivityEdit.jsx';
import TransitEdit from '../../Transit/TransitEdit.jsx';

class Account extends Component {

  render() {
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

export default Account;