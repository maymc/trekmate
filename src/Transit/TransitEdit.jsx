import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editTransit, getTransitById } from '../actions/actions';

class TransitEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // id: this.props.transitById.id,
      type: this.props.transitById.type,
      date: this.props.transitById.date,
      time: this.props.transitById.time,
      reservation: this.props.transitById.reservation,
      price: this.props.transitById.price,
      user_id: this.props.transitById.user_id,
      trip_id: this.props.transitById.trip_id
    }
  }

  componentDidMount() {

    //This id comes from the url
    const transitId = this.props.match.params.id;
    console.log("Setting transitId:", transitId);

    this.props.dispatch(getTransitById(transitId));
  }

  //Helper functions
  handleChange = (e) => {
    console.log("TransitEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.transitById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - TransitEdit - this.props:", this.props);
    console.log("\nhandleSubmit - TransitEdit - this.props.accommodationById.id:", this.props.transitById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editTransit(this.state, this.props.transitById.id));

    //Redirect to accommodations page
    this.props.history.push(`/transit/${this.props.transitById.id}`);
  }

  render() {
    console.log("TransitEdit - render - this.props:", this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Type</label>
          <input onChange={this.handleChange} type='text' name="type" defaultValue={this.props.transitById.type} />
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" defaultValue={this.props.transitById.date} />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='text' name="time" defaultValue={this.props.transitById.time} />
          <br /><br />

          <label>Reservation</label>
          <input onChange={this.handleChange} type='text' name="reservation" defaultValue={this.props.transitById.reservation} />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.transitById.price} />
          <br /><br />

          <button type="submit">Update Transit</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    transitById: state.transitById
  }
}

export default connect(mapStateToProps)(TransitEdit);