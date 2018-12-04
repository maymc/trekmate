import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addActivity } from '../actions/actions';

class ActivityAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activity_name: null,
      location: null,
      date: null,
      time: null,
      price: null,
      type: null,
      votes: null,
      reservation: null,
      notes: null,
      image: null,
      user_id: 1,
      trip_id: 1
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ActivityAdd - handleSubmit this.props:", this.props);
    console.log("Activity Added!", this.state);

    this.props.dispatch(addActivity(this.state));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Activity</label>
          <input onChange={this.handleChange} type='text' name="activity_name" placeholder="enter name of activity..." />
          <br /><br />

          <label>Location</label>
          <input onChange={this.handleChange} type='text' name="location" placeholder="enter activity location" />
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" placeholder="MM/DD/YY" />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='time' name="time" placeholder="00:00 AM/PM" />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='number' name="price" placeholder="enter price of flight" />
          <br /><br />

          <label>Type</label>
          <select name="type" onChange={this.handleChange}>
            <option value="select">Select</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Indoors">Indoors</option>
            <option value="Food">Food</option>
          </select>
          <br /><br />

          <label>Votes</label>
          <input onChange={this.handleChange} type='number' name="votes" />
          <br /><br />

          <label>Reservation?</label>
          <select name="reservation" onChange={this.handleChange}>
            <option value="select">Select
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" placeholder="enter any notes" />
          <br /><br />

          <label>Upload an image</label>
          <input onChange={this.handleChange} type='text' name='image' placeholder="enter image url" />
          <br /><br />

          <button type="submit">Add Activity</button>

        </form>
      </div>
    )
  }
}

export default connect()(ActivityAdd);