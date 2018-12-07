import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getActivity } from '../actions/actions';


class Activity extends Component {

  componentDidMount() {

    //get activity by activity_id
    let id = this.props.match.params.id;
    this.props.dispatch(getActivity(id));
  }

  //App Component - render html elements
  render() {
    const { activity } = this.props;

    return (
      <div key={activity.id}>
        <p>{activity.activity_name}</p>
      </div>
    )


  }
}

const mapStateToProps = state => {
  return {
    activity: state,
  }
}

export default connect(mapStateToProps)(Activity);
