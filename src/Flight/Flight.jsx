import React, { Component } from 'react';


import { connect } from 'react-redux';
import { getAllFlights } from '../actions/actions';


class Flight extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {

    }
  }

  //Lifecycle Methods
  componentDidMount() {
    this.props.dispatch(getAllFlights());

  }

  //App Component - render html elements
  render() {
    const flights = this.props.flights;
    return flights.map(item => {
      return (
        <div key={item.id}>
          <p>
            {item.airlines}
          </p>
        </div>
      )
    })

  }
}

const mapStateToProps = state => {
  return {
    flights: state,
  }
}
export default connect(mapStateToProps)(Flight);
