import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';    //part of Abby's template
import { getAllTrips } from '../../actions/actions'; //part of Abby's template

// import { Collaborators } from '../Trip/collaboratorcomponent'

class Trip extends Component {

  componentDidMount() {
    this.props.dispatch(getAllTrips());   //part of Abby's template
    let tripId = this.props.match.params.dreams_id;
    // this.props.dispatch()
    console.log("props", this.props)
  }

  render() {
    const trips = this.props.trips; //part of Abby's template
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

    //Below is Abby's template stuff for redux
    // return trips.map(item => {
    //   return (
    //     <div key={item.id}>
    //       city name: {item.city}
    //     </div>
    //   )
    // })
  }
}

const mapStateToProps = state => {
  return {
    trips: state,
  }
}


export default connect(mapStateToProps)(Trip);