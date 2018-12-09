import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

//Import actions
import { editAccommodation, getAccommodationById } from '../actions/actions';

class AccommodationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.accommodationById.id,
      lodging_name: this.props.accommodationById.lodging_name,
      address: this.props.accommodationById.address,
      check_in_date: this.props.accommodationById.check_in_date,
      check_out_date: this.props.accommodationById.check_out_date,
      price: this.props.accommodationById.price,
      is_paid: this.props.accommodationById.is_paid,
      reservation_code: this.props.accommodationById.reservation_code,
      notes: this.props.accommodationById.notes,
      user_id: this.props.accommodationById.user_id,
      trip_id: this.props.accommodationById.trip_id
    }
  }

  //Lifecycle Methods
  componentDidMount() {

    //This id comes from the url
    const accommodationId = this.props.match.params.id;
    console.log("Setting accommodationId:", accommodationId);

    this.props.dispatch(getAccommodationById(accommodationId));
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
    console.log("\nhandleSubmit - AccommodationEdit - this.props.accommodationById.id:", this.props.accommodationById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editAccommodation(this.state, this.props.accommodationById.id));

    //Redirect to accommodations page
    this.props.history.push(`/accommodation/${this.props.accommodationById.id}`);
  }

  render() {
    console.log("AccommodationEdit - render - this.props:", this.props);
    let { accommodationById } = this.props
    console.log('acc', accommodationById)

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" defaultValue={this.props.accommodationById.lodging_name} />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" defaultValue={this.props.accommodationById.address} />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='date' name="check_in_date" defaultValue={this.props.accommodationById.check_in_date} />
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='text' name="check_out_date" defaultValue={this.props.accommodationById.check_out_date} />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.accommodationById.price} />
          <br /><br />

          <label>Pay Status (Yes/No)</label><br />
          <input onChange={this.handleChange} type='text' name="is_paid" defaultValue={this.props.accommodationById.is_paid} />
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" defaultValue={this.props.accommodationById.reservation_code} />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" defaultValue={this.props.accommodationById.notes} />
          <br /><br />

          {/* <button type="submit" value="Save draft for later" onClick={this.fillInEditAccommodation}>Update Accommodation</button> */}

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