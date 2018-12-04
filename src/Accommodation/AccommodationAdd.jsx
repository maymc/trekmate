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

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" placeholder="enter lodging name..." />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" placeholder="enter lodging address..." />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='date' name="check_in_date" />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='date' name="check_out_date" />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='number' name="price" placeholder="$" />
          <br /><br />

          <label>Pay Status</label><br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="Yes" />Paid<br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="No" />Not Paid
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" placeholder="enter your reservation code..." />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" />
          <br /><br />

          <button type="submit">Add Accommodation</button>

        </form>
      </div>
    )
  }
}


export default connect()(AccommodationAdd);