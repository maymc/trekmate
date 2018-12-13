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
      is_paid: false,
      reservation_code: null,
      notes: null,
      user_id: 1,
      trip_id: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { 
    let temp = this.props.location.search
    let id = Number(temp.substr(1))
    this.setState({
      trip_id: id,
      user_id: 1
    })
  }

  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Acc Add Props", this.props)
    console.log("Acc Add State", this.state);

    this.props.dispatch(addAccommodation(this.state));

    //Redirect to accommodations page
    this.props.history.push(`users/account/${this.state.user_id}/trips/${this.state.trip_id}`);
  }

  updateAddress = (address, lodging_name) => {
    this.setState({
      lodging_name: lodging_name,
      address: address
    })
    console.log("Parent method, update address", this.state)
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

  render() {
    console.log('State', this.state)
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
                <input type="text" id="rescode" name="reservation_code" onChange={this.handleChange} className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="rescode">Reservation code</label>
              </div>
              <div className="inline">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" placeholder="$00.00"></input>
                <div className="checkbox">
                <input onChange={this.is_Paid} type="checkbox" id="paystatus" name="is_paid"></input>
                <label htmlFor="paystatus">Paid</label>
                </div>
              </div>

              <div>
                <label className="blue formsection">Notes</label>
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