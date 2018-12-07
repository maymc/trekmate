import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getAllAccommodations } from '../actions/actions';


class Accommodation extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {}
  }

  //Lifecycle Methods
  componentDidMount() {
    console.log('\nAccommodation Component Mounted Successfully!');
    this.props.dispatch(getAllAccommodations());
  }

  //App Component - render html elements
  render() {
    console.log('\nAccommodations.jsx - props:', this.props.accommodations)

    return this.props.accommodations.map(accommodationElem => {
      return (
        <div key={accommodationElem.id}>
          <p>{accommodationElem.lodging_name}</p>
          <p>{accommodationElem.address}</p>
          <p>{accommodationElem.check_in_date}</p>
          <p>{accommodationElem.check_out_date}</p>
          <p>{accommodationElem.price}</p>
          <p>{accommodationElem.notes}</p>
          <p>{accommodationElem.reservation_code}</p>

          <div>
            <Link to={`/accommodations/edit/${accommodationElem.id}`}>
              <button type='button'>Edit Accommodation</button>
            </Link>
          </div>
        </div>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations,
  }
}

export default connect(mapStateToProps)(Accommodation);
