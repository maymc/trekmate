import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addAccommodation } from '../actions/actions.js';

class AccommodationAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lodging_name: null,
      address: null,
      check_in_date: null,
      check_out_date: null,
      price: null,
      is_paid: null,
      reservation_code: null,
      notes: null,
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
    console.log("AccommodationAdd - handleSubmit this.props:", this.props)
    console.log("Accommodation Added!", this.state);
    this.props.dispatch(addAccommodation(this.state));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label>
          <input onChange={this.handleChange} type='text' name="lodging_name" placeholder="enter name of lodging" />
          <br /><br />

          <label>Address</label>
          <input onChange={this.handleChange} type='text' name="address" placeholder="enter address of lodging" />
          <br /><br />

          <label>Check In</label>
          <input onChange={this.handleChange} type='text' name="check_in_date" placeholder="enter check in date" />
          <br /><br />

          <label>Check Out</label>
          <input onChange={this.handleChange} type='text' name="check_out_date" placeholder="enter check out date" />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='number' name="price" placeholder="enter price of lodging" />
          <br /><br />

          <label>Pay Status</label>
          <input onChange={this.handleChange} type='text' name="is_paid" placeholder="have you paid for this lodging?" />
          <br /><br />

          <label>Reservation Code</label>
          <input onChange={this.handleChange} type='text' name="reservation_code" placeholder="enter reservation code" />
          <br /><br />

          <label>Notes</label>
          <input onChange={this.handleChange} type='text' name="notes" placeholder="enter any notes" />
          <br /><br />

          <button type="submit">Add Accommodation</button>

        </form>
      </div>
    )
  }
}


export default connect()(AccommodationAdd);