import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addFlight } from '../actions/actions';

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

class FlightAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airlines: null,
      departure_date: null,
      departure_time: null,
      arrival_date: null,
      arrival_time: null,
      reservation_code: 0,
      checked_in_baggage: 0,
      price: 0,
      notes: "",
      user_id: null,
      trip_id: null
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    let id = (this.props.location.search).split("?")
    
    // console.log('Temp', id[1])
    this.setState({
      trip_id: Number(id[2]),
      user_id: Number(id[1])
    })
   }

  handleChange = (e) => {
    console.log('Flight', this.props)
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("FlightAdd - handleSubmit this.props:", this.props);
    console.log("Flight Added!", this.state);

    this.props.dispatch(addFlight(this.state));
    this.props.history.push(`/users/account/${this.state.user_id}/trips/${this.state.trip_id}`);
    // //Redirect to accommodations page
    // this.props.history.push(`/users/account/${this.props.user_id}/trips/${this.props.accommodationById.id}`);
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
    console.log('flight', this.state)
    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>
            <div className="formbottom">
            <h2 className="blue">Flight</h2>
            <div className="form-group">
              <input type="text" id="flight" name="airlines" onChange={this.handleChange} className="form-control" required></input>
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
              <TimePicker showSecond={false}  defaultValue={now} className="reginput" onChange={this.departureTime} format={format} use12Hours inputReadOnly />
              <label className="spaceleft">Return Flight:</label>
              <TimePicker showSecond={false}  defaultValue={now} className="reginput" onChange={this.returnTime} format={format} use12Hours inputReadOnly />
            </div>

            <div className="form-group">
                <input type="text" id="rescode" name="reservation_code" onChange={this.handleChange} className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
            </div>
            <div className="form-group">
                <input type="number" id="baggage" name="checked_in_baggage" onChange={this.handleChange} className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="baggage">How many bags are you checking?</label>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" placeholder="$00.00"></input>
              </div>
            <div>
                <label className="blue formsection">Notes</label>
                <textarea onChange={this.handleChange} name="notes"></textarea>
            </div>
            <button type="submit">Add Flight</button>
            </div>


          </form>
        </div>
      </div>
    )
  }
}

export default connect()(FlightAdd);