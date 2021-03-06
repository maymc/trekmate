import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

//Import actions
import { editAccommodation, getAccommodationById } from '../actions/actions';

class AccommodationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: null,
      endDate: null,
      id: null,
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const accommodationId = this.props.match.params.id;
    // console.log("Setting accommodationId:", accommodationId);
    this.setState({
      id: Number(accommodationId)
    })

    this.props.dispatch(getAccommodationById(accommodationId));
  }

  //Helper Functions
  handleChange = (e) => {
    // console.log("AccommodationEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.accommodationById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("\nhandleSubmit - AccommodationEdit - this.props:", this.props);
    // console.log("\nhandleSubmit - AccommodationEdit - this.props.accommodationById.id:", this.props.accommodationById.id);
    // console.log("Updated to this.state:", this.state);
    this.props.dispatch(editAccommodation(this.state, this.props.accommodationById.id));

    //Redirect to accommodations page
    this.props.history.push(`/accommodation/${this.props.accommodationById.id}`);
  }
  is_Paid = () => {
    if (this.state.is_paid === false) {
      this.setState({
        is_paid: true
      })
    }
    else {
      this.setState({
        is_paid: false
      })
    }
  }
  setDates(array) {
    // console.log('setDates', array)
    if (this.state.startDate === null) {
      this.setState({
        startDate: moment(array[1]),
        endDate: moment(array[2]),
      })
    } else {
      console.log("NOT NULL")
    }
  }

  render() {
    let dd = (this.props.location.search).split("?")
    this.setDates(dd)
    // console.log("AccommodationEdit - render - this.props:", this.props);
    // console.log("AccommodationEdit - render - this.state:", this.state);
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
                <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" defaultValue={this.props.accommodationById.address} required></input>
                <label className="form-control-placeholder" htmlFor="address">Address</label>
              </div>
              <div>
                <label className="blue formsection">Details</label>
                <DateRangePicker
                  // startDatePlaceholderText={this.props.accommodationById.check_in_date}
                  // endDatePlaceholderText={this.props.accommodationById.check_out_date}
                  startDate={this.state.startDate}
                  startDateId="your_unique_start_date_id"
                  endDate={this.state.endDate}
                  endDateId="your_unique_end_date_id"
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })}   // PropTypes.func.isRequired,
                />
              </div>
              <div className="form-group">
                <input type="text" id="rescode" name="reservation_code" onChange={this.handleChange} className="form-control" defaultValue={this.props.accommodationById.reservation_code} required></input>
                <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
              </div>
              <div className="inline">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" placeholder="$00.00" defaultValue={this.props.accommodationById.price}></input>
                {/* <div className="checkbox">
                  <input onChange={this.is_Paid} type="checkbox" id="paystatus" name="is_paid"></input>
                  <label htmlFor="paystatus">Paid</label>
                </div> */}
              </div>
              <div className="form-group">
                <label>Is this paid for?</label>
                <select name="is_paid" onChange={this.handleChange}>
                  <option value={this.props.accommodationById.is_paid}>{this.props.accommodationById.is_paid}
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="blue formsection">Notes</label>
                <textarea onChange={this.handleChange} name="notes" defaultValue={this.props.accommodationById.notes}></textarea>
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
    accommodationById: state.accommodationById
  }
}

export default connect(mapStateToProps)(AccommodationEdit);