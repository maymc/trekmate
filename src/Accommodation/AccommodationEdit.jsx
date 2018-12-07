import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editAccommodation, getAccommodation } from '../actions/actions';

class AccommodationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      lodging_name: "",
      address: "",
      check_in_date: "",
      check_out_date: "",
      price: "",
      is_paid: "",
      reservation_code: "",
      notes: "",
      user_id: 1,
      trip_id: 1
    }
  }

  //Lifecycle Methods
  componentDidMount() {

    //This id comes from the url
    const accommodationId = this.props.match.params.id;
    console.log("Updating accommodationId:", accommodationId);

    this.props.dispatch(getAccommodation(accommodationId));
  }

  //Helper Functions
  handleChange = (e) => {
    console.log("AccommodationEdit - handleChange")
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.accommodationById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - AccommodationEdit - this.props:", this.props);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editAccommodation(this.state, 1));

    //Redirect to accommodations page
    this.props.history.push(`/accommodations`);
  }

  render() {
    console.log("AccommodationEdit - render - this.props:", this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" defaultValue={this.props.accommodationById.lodging_name} />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" defaultValue={this.props.accommodationById.address} />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='text' name="check_in_date" defaultValue={this.props.accommodationById.check_in_date} />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='text' name="check_out_date" defaultValue={this.props.accommodationById.check_out_date} />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.accommodationById.price} />
          <br /><br />

          <label>Pay Status</label><br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="Yes" />Paid<br />
          <input onChange={this.handleChange} type="radio" name="is_paid" value="No" />Not Paid
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" defaultValue={this.props.accommodationById.reservation_code} />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" defaultValue={this.props.accommodationById.notes} />
          <br /><br />

          <button type="submit">Update Accommodation</button>

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