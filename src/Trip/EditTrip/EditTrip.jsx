import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editTrip, getTripById } from '../../actions/actions';

class EditTrip extends Component {
  constructor(props) {
    super(props)
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const tripId = this.props.match.params.id;
    console.log("Setting tripId:", tripId);

    this.props.dispatch(getTripById(tripId));
  }

  //Helper Functions
  handleChange = (e) => {
    console.log("EditTrip - handleChange")
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.tripById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - EditTrip - this.props:", this.props);
    console.log("\nhandleSubmit - EditTrip - this.props.tripById.id:", this.props.tripById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editTrip(this.state, this.props.tripById.id));

    //Redirect to trip page
    this.props.history.push(`/users/account/${this.props.tripById.user_id}/trips/${this.props.tripById.id}`);
  }

  render() {
    console.log("sadasdathis.props:", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>City</label><br />
        <input onChange={this.handleChange} type='text' name="city" defaultValue={this.props.tripById.city} />
        <br /><br />
        <label>State</label><br />
        <input onChange={this.handleChange} type='text' name="state" defaultValue={this.props.tripById.state} />
        <br /><br />

        <label>Country</label><br />
        <input onChange={this.handleChange} type='text' name="country" defaultValue={this.props.tripById.country} />
        <br /><br />

        <label>Start Date</label><br />
        <input onChange={this.handleChange} type='text' name="start_date" defaultValue={this.props.tripById.start_date} />
        <br /><br />

        <label>End Date</label><br />
        <input onChange={this.handleChange} type='text' name="end_date" defaultValue={this.props.tripById.end_date} />
        <br /><br />

        <button type="submit">Update Trip Info</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    tripById: state.tripById
  }
}

export default connect(mapStateToProps)(EditTrip);