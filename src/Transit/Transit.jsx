import React, { Component } from 'react';

//------Redux------//
import { connect } from 'react-redux';
import { getTransit } from '../actions/actions';

class Transit extends Component {

  componentDidMount() {

    //get transit by transit_id
    let id = this.props.match.params.id;
    this.props.dispatch(getTransit(id));

  }


  render() {
    const { transit } = this.props;

    return (
      <div key={transit.id}>
        <p>{transit.type}</p>
      </div>
    )


  }
}


const mapStateToProps = state => {
  return {
    transit: state,
  }
}


export default connect(mapStateToProps)(Transit);
