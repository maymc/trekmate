import React, { Component } from 'react';

//------Redux------//
import { connect } from 'react-redux';
import { getAllTransits } from '../actions/actions';

class Transit extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {

    }
  }

  //Lifecycle Methods
  componentDidMount() {
    this.props.dispatch(getAllTransits());

  }


  //App Component - render html elements
  render() {
    const transits = this.props.transits;
    return transits.map(item => {
      return (
        <div key={item.id}>
          <p>{item.type}</p>
        </div>
      )
    })

  }
}


const mapStateToProps = state => {
  return {
    transits: state,
  }
}


export default connect(mapStateToProps)(Transit);
