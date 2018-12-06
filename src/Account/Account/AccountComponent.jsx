import React, { Component } from 'react';
import './styles.css';

class Account extends Component {

  render() {
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

export default Account;