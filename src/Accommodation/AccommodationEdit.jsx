import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editAccommodation, getAccommodation } from '../actions/actions';

class AccommodationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // id: props.id,
      lodging_name: props.lodging_name,
      address: props.address,
      check_in_date: props.check_in_date,
      check_out_date: props.check_out_date,
      price: props.price,
      is_paid: props.is_paid,
      reservation_code: props.reservation_code,
      notes: props.notes,
      user_id: 1,
      trip_id: 1
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    const accommodationId = this.props.match.params.id;
    console.log("accommodationId:", accommodationId);
    this.props.dispatch(getAccommodation(accommodationId));
  }

  //Helper Functions
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - AccommodationEdit - this.props:", this.props);
    // console.log("Updated id:", this.props.accommodations.id);
    console.log("Updated this.state:", this.state);
    // console.log("\nAccommodation has been updated.", this.state, this.props.accommodations.id);

    // this.props.dispatch(getAllAccommodations());
    this.props.dispatch(editAccommodation(this.state));
  }

  render() {
    console.log("AccommodationEdit - this.props:", this.props);
    // console.log("AccommodationEdit - id:", this.props.accommodations[this.props.accommodation_id]);
    return (
      <div>
        {/* <h1>Test</h1> */}
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" value={this.props.accommodationById.lodging_name} />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" value={this.props.accommodationById.address} />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='date' name="check_in_date" />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='date' name="check_out_date" />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='number' name="price" />
          <br /><br />

          <label>Pay Status</label><br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="Yes" />Paid<br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="No" />Not Paid
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" />
          <br /><br />

          <button type="submit">Update Accommodation</button>



          {/* <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" value={this.props.accommodationById.lodging_name} />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" value={this.props.accommodationById.address} />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='date' name="check_in_date" />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='date' name="check_out_date" />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='number' name="price" value={this.props.accommodationById.price} />
          <br /><br />

          <label>Pay Status</label><br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="Yes" />Paid<br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="No" />Not Paid
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" value={this.props.accommodationById.reservation_code} />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" value={this.props.accommodationById.notes} />
          <br /><br /> */}



        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations,
    accommodationById: state.accommodationById
  }
}

export default connect(mapStateToProps)(AccommodationEdit);