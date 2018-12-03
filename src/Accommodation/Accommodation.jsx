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

    return (
      <>
        Accommodation
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    accommodations: state,
  }
}


export default connect(mapStateToProps)(Accommodation);
