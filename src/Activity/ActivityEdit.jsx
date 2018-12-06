import React, { Component } from 'react';
import './styles.css';

class ActivityEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      activityName: null,
      activityOwner: null,
      location: null,
      date: null,
      time: null,
      price: null,
      type: null,
      votes: null,
      reservation: null,
      notes: null
    }
  }

  //Helper functions
  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log("Login - handleLogin this.props:", this.props);
    console.log("Login Successful! User credentials:", this.state);
    this.props.history.push(`/`); //change this to authenticated view when created
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Activity Name</label>
          <input onChange={this.handleChange} type='text' name="activityName" placeholder="edit activity name" />
          <br /><br />

          <label>Owner of Activity</label>
          <input onChange={this.handleChange} type='text' name="activityOwner" placeholder="edit who owns this activity" />
          <br /><br />

          <label>Location</label>
          <input onChange={this.handleChange} type='text' name="location" placeholder="edit the location of activity" />
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" placeholder="edit the date of activity" />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='text' name="time" placeholder="edit the time of activity" />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='text' name="price" placeholder="edit the price of activity" />
          <br /><br />

          <label>Type</label>
          <input onChange={this.handleChange} type='text' name="type" placeholder="edit the type of activity" />
          <br /><br />

          <label>Votes</label>
          <input onChange={this.handleChange} type='text' name="votes" placeholder="edit how many votes this activity received" />
          <br /><br />

          <label>Reservation</label>
          <input onChange={this.handleChange} type='text' name="reservation" placeholder="edit the activity reservation" />
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" placeholder="edit the activity notes" />
          <br /><br />

        </form>
      </div>
    )
  }
}


export default ActivityEdit;