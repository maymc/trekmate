import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addTransit } from '../actions/actions';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

//Time picker
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class TransitAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: null,
      date: null,
      time: null,
      reservation: null,
      price: null,
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
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("TransitAdd - handleSubmit this.props:", this.props);
    console.log("Transit Added!", this.state);

    this.props.dispatch(addTransit(this.state));
    this.props.history.push(`/users/account/${this.state.user_id}/trips/${this.state.trip_id}`);
  }

  updateTime = (value) => {
    // console.log(value.format(format));
    this.setState({
      time: value.format(format)
    })
  }

  render() {
    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>
          <div className="formbottom">
          <h2 className="blue">Transit</h2>
            <select className="formselect" name='type' onChange={this.handleChange}>
              <option value="select">What type of transit?</option>
              <option value="shuttle">Shuttle</option>
              <option value="car-rental">Car Rental</option>
              <option value="taxi">Taxi</option>
              <option value="bus">Bus</option>
              <option value="subway">Train</option>
              <option value="uber-lyft">Uber/Lyft</option>
              <option value="walking">Walking</option>
            </select>
            <div>
              <label className="blue formsection">Details</label>
              <SingleDatePicker
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date =>this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
              />
              <TimePicker showSecond={false}  defaultValue={now} className="reginput" onChange={this.updateTime} format={format} use12Hours inputReadOnly />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" placeholder="$00.00"></input>
            </div>

            <div className="form-group">
                <label>Do you have a reservation?</label>
                <select name="reservation" onChange={this.handleChange}>
                  <option value="select">Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
            </div>
            <button type="submit">Add Transit</button>
          </div>


          </form>
        </div>
      </div>
    )
  }
}

export default connect()(TransitAdd);