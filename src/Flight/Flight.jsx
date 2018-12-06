import React, { Component } from 'react';


import { connect } from 'react-redux';
import { getFlight } from '../actions/actions';


class Flight extends Component {


  componentDidMount() {

    //get flight by flight_id
    let id = this.props.match.params.id;
    this.props.dispatch(getFlight(id));

  }

  //App Component - render html elements
  render() {
    const { flight } = this.props;

    return (
      <div key={flight.id}>
        <p>
          {flight.airlines}
        </p>
      </div>
    )


  }
}

const mapStateToProps = state => {
  return {
    flight: state,
  }
}
export default connect(mapStateToProps)(Flight);
