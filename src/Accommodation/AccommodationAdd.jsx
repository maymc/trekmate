import React, { Component } from 'react';
import LocationSearch from '../Global/Search/LocationSearchComponent';
import './styles.css';

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
  
  updateAddress = (address, lodging_name) => {
    this.setState({
        lodging_name: lodging_name,
        address: address})
    console.log("Parent method, update address", this.state)
  }

  render() {
    console.log('Props', this.state)
    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>
            <div className="formtop">
              <LocationSearch title="Where are you staying" updateAddress={this.updateAddress} />
            </div>
            <div className="formbottom">
            <h2 className="blue">Accommodation</h2>
              <div className="form-group">
                  <input type="text" id="name" name="lodging_name" onChange={this.handleChange} className="form-control" value={this.state.lodging_name} required></input>
                  <label className="form-control-placeholder" htmlFor="name">Lodging name</label>
              </div>
              <div className="form-group">
                  <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" value={this.state.address} required></input>
                  <label className="form-control-placeholder" htmlFor="address">Address</label>
              </div>
              <div>
                <label className="blue dates">Details</label>
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })}   // PropTypes.func.isRequired,
                />
              </div>
              <div className="form-group">
                <input type="text" id="rescode" name="eservation_code" onChange={this.handleChange}  className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
              </div>
              <div className="form-group">
                <input type="number" id="price" name="price" onChange={this.handleChange}  className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="price">Price</label>
              </div>
              <div className="formright checkbox">
                <input onChange={this.handleChange} type="checkbox" id="paystatus" name="is_paid"></input>
                <label for="paystatus">Paid</label>
              </div>
        
              <div>
                <label className="blue dates">Notes</label>
                <textarea onChange={this.handleChange} name="notes"></textarea>
              </div>
              <button type="submit">Add Accommodation</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}


export default connect()(AccommodationAdd);