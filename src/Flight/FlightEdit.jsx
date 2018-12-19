import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editFlight, getFlightById } from '../actions/actions';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

//Time picker
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class FlightEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airlines: this.props.flightById.airlines,
      departure_time: this.props.flightById.departure_time,
      arrival_time: this.props.flightById.arrival_time,
      reservation_code: this.props.flightById.reservation_code,
      checked_in_baggage: this.props.flightById.checked_in_baggage,
      price: this.props.flightById.price,
      notes: this.props.flightById.notes,
      user_id: this.props.flightById.user_id,
      trip_id: this.props.flightById.trip_id,
      startDate: null,
      endDate: null,
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const flightId = this.props.match.params.id;
    console.log("Setting flightId:", flightId);

    this.props.dispatch(getFlightById(flightId));
  }

  handleChange = (e) => {
    console.log("FlightEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.flightById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - FlightEdit - this.props:", this.props);
    console.log("\nhandleSubmit - FlightEdit - this.props.flightById.id:", this.props.flightById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editFlight(this.state, this.props.flightById.id));

    //Redirect to flight page
    this.props.history.push(`/flight/${this.props.flightById.id}`);
  }
  departureTime = (value) => {
    // console.log(value.format(format));
    this.setState({
      departure_time: value.format(format)
    })
  }

  returnTime = (value) => {
    // console.log(value.format(format));
    this.setState({
      arrival_time: value.format(format)
    })
  }

  render() {
    console.log("FlightEdit - render - this.props:", this.props);
    this.state.startDate = moment(this.props.flightById.departure_date);
    this.state.endDate = moment(this.props.flightById.arrival_date);
    return (
      <div className="container col12">
      <div className="wrap-form">
        <form className="col12" onSubmit={this.handleSubmit}>
          <div className="formbottom">
          <h2 className="blue">Update Flight</h2>
          <div className="form-group">
            <input type="text" id="flight" name="airlines" onChange={this.handleChange} className="form-control" value={this.props.flightById.airlines}></input>
            <label className="form-control-placeholder" htmlFor="flight">Airline</label>
          </div>
          <div>
              <label className="blue formsection">Details</label>
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
            <label>Departure Flight:</label>
            <TimePicker showSecond={false} className="reginput" value={moment(this.props.flightById.departure_time,'h:mm a')} onChange={this.departureTime} use12Hours inputReadOnly />
            <label className="spaceleft">Return Flight:</label>
            <TimePicker showSecond={false}className="reginput" value={moment(this.props.flightById.arrival_time,'h:mm a')} onChange={this.returnTime} use12Hours inputReadOnly />
          </div>
          <div className="form-group">
              <input type="text" id="rescode" name="reservation_code" onChange={this.handleChange} className="form-control" value={this.props.flightById.reservation_code}></input>
              <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
          </div>
          <div className="form-group">
              <input type="number" id="baggage" name="checked_in_baggage" onChange={this.handleChange} className="form-control" value={this.props.flightById.checked_in_baggage}></input>
              <label className="form-control-placeholder" htmlFor="baggage">How many bags are you checking?</label>
          </div>
          <div className="form-group">
              <label>Price</label>
              <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" value={this.props.flightById.price}></input>
            </div>
          <div>
              <label className="blue formsection">Notes</label>
              <textarea onChange={this.handleChange} name="notes" value={this.props.flightById.notes}></textarea>
          </div>
          <button type="submit">Update</button>
          </div>


        </form>
      </div>
    </div>
      // <div>
      //   <form onSubmit={this.handleSubmit}>

      //     <label>Departure Time</label>
      //     <input onChange={this.handleChange} type='text' name="departure_time" defaultValue={this.props.flightById.departure_time} />
      //     <br /><br />

      //     <label>Arrival Time</label>
      //     <input onChange={this.handleChange} type='text' name="arrival_time" defaultValue={this.props.flightById.arrival_time} />
      //     <br /><br />


      //     <button type="submit">Update Flight</button>

      //   </form>
      // </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flightById: state.flightById
  }
}

export default connect(mapStateToProps)(FlightEdit);