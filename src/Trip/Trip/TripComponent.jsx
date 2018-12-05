import React, { Component } from 'react';
import './styles.css';

// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  componentDidMount() {
    let tripId = this.props.match.params.dreams_id;
    // this.props.dispatch()
    console.log("props",this.props)
  }

  render() {
    return (
      <div className="trip">
        <div className="tripbanner">

        </div>
        <div className="tripfeed">
        </div>
        <div className="tripbar">
          <h3>Add event:</h3>
          <button><i className="fas fa-hiking"></i> Activity</button>
          <button><i className="fas fa-plane"></i> Flight</button>
          <button><i className="fas fa-car-side"></i> Transit</button>
          <button><i className="fas fa-hotel"></i> Accommodation</button>
        </div>
      </div>
    );
  }
}

export default Trip;