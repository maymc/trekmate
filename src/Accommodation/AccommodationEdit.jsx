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
    console.log("AccommodationEdit - handleChange");
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
    console.log('state', this.state)
    // let { accommodationById } = this.props

    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>

            <div className="formbottom">
            <h2 className="blue">Accommodation</h2>
              <div className="form-group">
                  <input type="text" id="name" name="lodging_name" onChange={this.handleChange} className="form-control" defaultValue={this.props.accommodationById.lodging_name} required></input>
                  <label className="form-control-placeholder" htmlFor="name">Lodging name</label>
              </div>
              <div className="form-group">
                  <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" defaultValue={this.props.accommodationById.address}  required></input>
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
                <input type="text" id="rescode" name="eservation_code" onChange={this.handleChange}  className="form-control" defaultValue={this.props.accommodationById.reservation_code} required></input>
                <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
              </div>
              <div className="form-group">
                <input type="number" id="price" name="price" onChange={this.handleChange}  className="form-control" defaultValue={this.props.accommodationById.price} required></input>
                <label className="form-control-placeholder" htmlFor="price">Price</label>
              </div>
              <div className="formright checkbox">
                <input onChange={this.handleChange} type="checkbox" id="paystatus" name="is_paid" defaultValue={this.props.accommodationById.notes} ></input>
                <label htmlFor="paystatus">Paid</label>
              </div>
        
              <div>
                <label className="blue dates">Notes</label>
                <textarea onChange={this.handleChange} name="notes"></textarea>
              </div>
              <button type="submit">Update Accommodation</button>
            </div>

          </form>
        </div>
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