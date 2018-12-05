import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllAccommodations());

  }

  //App Component - render html elements
  render() {
    const accommodations = this.props.accommodations;
    console.log('accommodation prop:', accommodations)
    return accommodations.map(item => {
      return (
        <div key={item.id}>
          <p>{item.lodging_name}</p>
          <p>{item.address}</p>
          <p>{item.check_in_date}</p>
          <p>{item.check_out_date}</p>
          <p>{item.price}</p>
          <p>{item.notes}</p>
          <p>{item.reservation_code}</p>
        </div>
      )
    })
  }
}


const mapStateToProps = state => {
  return {
    accommodations: state,
  }
}


export default connect(mapStateToProps)(Accommodation);
