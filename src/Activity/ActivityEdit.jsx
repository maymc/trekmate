import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editActivity, getActivityById } from '../actions/actions';

class ActivityEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.activityById.id,
      activity_name: this.props.activityById.activity_name,
      location: this.props.activityById.location,
      date: this.props.activityById.date,
      time: this.props.activityById.time,
      price: this.props.activityById.price,
      type: this.props.activityById.type,
      votes: this.props.activityById.votes,
      reservation: this.props.activityById.reservation,
      notes: this.props.activityById.notes,
      image: this.props.activityById.image,
      user_id: this.props.activityById.user_id,
      trip_id: this.props.activityById.trip_id
    }
  }

  //Lifecycle Methods
  componentDidMount() {

    //This id comes form the url
    const activityId = this.props.match.params.id;
    console.log("Setting activityId:", activityId);

    this.props.dispatch(getActivityById(activityId));
  }

  //Helper functions
  handleChange = (e) => {
    console.log("ActivityEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.activityById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - ActivityEdit - this.props:", this.props);
    console.log("\nhandleSubmit - ActivityEdit - this.props.activityById.id:", this.props.activityById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editActivity(this.state, this.props.activityById.id));

    //Redirect to accommodations page
    this.props.history.push(`/activity/${this.props.activityById.id}`);
  }

  render() {
    console.log("ActivityEdit - render - this.props:", this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Activity</label>
          <input onChange={this.handleChange} type='text' name="activity_name" defaultValue={this.props.activityById.activity_name} />
          <br /><br />

          <label>Location</label>
          <input onChange={this.handleChange} type='text' name="location" defaultValue={this.props.activityById.location} />
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" defaultValue={this.props.activityById.date} />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='text' name="time" defaultValue={this.props.activityById.time} />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.activityById.price} />
          <br /><br />

          <label>Type</label>
          <input onChange={this.handleChange} type='text' name="type" defaultValue={this.props.activityById.type} />
          <br /><br />

          <label>Votes</label>
          <input onChange={this.handleChange} type='text' name="votes" defaultValue={this.props.activityById.votes} />
          <br /><br />

          <label>Reservation</label>
          <input onChange={this.handleChange} type='text' name="reservation" defaultValue={this.props.activityById.reservation} />
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" defaultValue={this.props.activityById.notes} />
          <br /><br />

          <label>Image Url</label>
          <input onChange={this.handleChange} type='text' name="image" defaultValue={this.props.activityById.image} />
          <br /><br />

          <button type="submit">Update Activity</button>

        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    activities: state.activities,
    activityById: state.activityById
  }
}

export default connect(mapStateToProps)(ActivityEdit);