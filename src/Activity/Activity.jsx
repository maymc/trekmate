import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllActivities } from '../actions/actions';


class Activity extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {

    }
  }

  //Lifecycle Methods
  componentDidMount() {
    this.props.dispatch(getAllActivities());
  }

  //App Component - render html elements
  render() {
    const activities = this.props.activities;
    return activities.map(item => {
      return (
        <div key={item.id}>
          <p>{item.activity_name}</p>
        </div>
      )
    })

  }
}

const mapStateToProps = state => {
  return {
    activities: state,
  }
}

export default connect(mapStateToProps)(Activity);
