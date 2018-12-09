import React, { Component } from 'react';
import LocationSearch from '../Global/Search/LocationSearchComponent';

//Redux Setup
import { connect } from 'react-redux';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

//Import actions
import { addAccommodation } from '../actions/actions.js';

class AccommodationAdd extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      lodging_name: null,
      address: null,
      startDate: null,
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

    //Redirect to accommodations page
    this.props.history.push(`/accommodations`);
  }

  render() {
    console.log('Props', this.state)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" placeholder="enter lodging name..." />
          <br /><br />
          <LocationSearch title="Where are you staying" />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" placeholder="enter lodging address..." />
          <br /><br />
          <label>Dates</label> <br />
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })}   // PropTypes.func.isRequired,
          /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='text' name="price" placeholder="$__.__" />
          <br /><br />

          <label>Pay Status (Yes/No)</label><br />
          <input onChange={this.handleChange} type='text' name="is_paid" placeholder="enter Yes or No" />
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