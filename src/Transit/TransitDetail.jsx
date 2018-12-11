import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getTransitById } from '../actions/actions';

class TransitDetail extends Component {

  componentDidMount() {
    const transitId = this.props.match.params.id;
    console.log("Setting transitId:", transitId);
    console.log("Transit Detail component Mounted Successfully");

    this.props.dispatch(getTransitById(transitId));
  }

  render() {
    console.log("\nTransitDetail- this.props.transitById:", this.props.transitById)

    return (
      <div key={this.props.transitById.id}>
        <p>Type: {this.props.transitById.type}</p>
        <p>Date: {this.props.transitById.date}</p>
        <p>Time: {this.props.transitById.time}</p>
        <p>Researvation: {this.props.transitById.reservation}</p>
        <p>Price: {this.props.transitById.price}</p>

        <Link to={`/transit/edit/${this.props.transitById.id}`}>
          <button type='button'>Edit Activity</button>
        </Link>

        <Link to={`/transit/trip/${this.props.transitById.trip_id}`}>
          <button type='button'>Back</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transitById: state.transitById
  }
}
export default connect(mapStateToProps)(TransitDetail);