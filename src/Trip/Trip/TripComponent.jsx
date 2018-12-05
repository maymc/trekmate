import React, { Component } from 'react';
import './styles.css';

// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  render() {
    return (
      <div className="trip">
        <div className="tripbanner">

        </div>
        <div className="tripfeed">
        </div>
        <div className="tripbar">
          <h3>Add event:</h3>
          <button><i class="fas fa-hiking"></i> Activity</button>
          <button><i class="fas fa-plane"></i> Flight</button>
          <button><i class="fas fa-car-side"></i> Transit</button>
          <button><i class="fas fa-hotel"></i> Accommodation</button>
        </div>
      </div>
    );
  }
}

export default Trip;