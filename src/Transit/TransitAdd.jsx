import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addTransit } from '../actions/actions';

class TransitAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: null,
      date: null,
      time: null,
      reservation: null,
      price: null,
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
    console.log("TransitAdd - handleSubmit this.props:", this.props);
    console.log("Transit Added!", this.state);

    this.props.dispatch(addTransit(this.state));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Type</label>
          <select name='type' onChange={this.handleChange}>
            <option value="select">Select</option>
            <option value="shuttle">Shuttle</option>
            <option value="car-rental">Car Rental</option>
            <option value="taxi">Taxi</option>
            <option value="bus">Bus</option>
            <option value="subway">Train</option>
            <option value="uber-lyft">Uber/Lyft</option>
            <option value="walking">Walking</option>
          </select>
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" placeholder="MM/DD/YY" />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='time' name="time" placeholder="00:00 AM/PM" />
          <br /><br />

          <label>Reservation?</label>
          <select name="reservation" onChange={this.handleChange}>
            <option value="select">Select
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='number' name="price" placeholder="enter price of flight" />
          <br /><br />

          <button type="submit">Add Transit</button>

        </form>
      </div>
    )
  }
}

export default connect()(TransitAdd);