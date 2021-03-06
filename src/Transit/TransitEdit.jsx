import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editTransit, getTransitById } from '../actions/actions';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

//Time picker
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const format = 'h:mm a';
// const now = moment().hour(0).minute(0);

class TransitEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: null,
      id: null
    }
  }

  componentDidMount() {

    //This id comes from the url
    const transitId = this.props.match.params.id;
    this.setState({
      id: Number(transitId)
    })
    console.log("Setting transitId:", transitId);

    this.props.dispatch(getTransitById(transitId));
  }

  //Helper functions
  handleChange = (e) => {
    console.log("TransitEdit - handleChange");
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.transitById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - TransitEdit - this.props:", this.props);
    console.log("\nhandleSubmit - TransitEdit - this.props.accommodationById.id:", this.props.transitById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editTransit(this.state, this.props.transitById.id));

    //Redirect to accommodations page
    this.props.history.push(`/transit/${this.props.transitById.id}`);
  }
  setTime = (value) => {
    console.log("setTime", value.format(format))

    this.setState({
      time: value.format(format)
    })
  }

  setDates(array) {
    console.log('setDates', array)
    if (this.state.date === null) {
      this.setState({
        date: moment(array[1])
      })
    } else {
      console.log("NOT NULL")
    }
  }

  render() {
    let dd = (this.props.location.search).split("?")
    this.setDates(dd)
    console.log("TransitEdit - render - this.props:", this.props);
    console.log("TransitEdit - render - this.state:", this.state);
    return (
      <div className="container col12">
        <div className="wrap-form" >
          <form className="col12" onSubmit={this.handleSubmit}>
            <div className="formbottom">
              <h2 className="blue">Transit</h2>
              <select className="formselect" name='type' onChange={this.handleChange}>
                <option value={this.props.transitById.type} >{this.props.transitById.type} </option>
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
                  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                  id="your_unique_id" // PropTypes.string.isRequired,
                />
                <TimePicker showSecond={false} placeholder={this.props.transitById.time} defaultValue={this.state.time} className="xxx" onChange={this.setTime} use12Hours inputReadOnly />
              </div>
              <div className="form-group">
                <label>Do you have a reservation?</label>
                <select name="reservation" onChange={this.handleChange}>
                  <option value={this.props.transitById.reservation}>{this.props.transitById.reservation}</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" defaultValue={this.props.transitById.price}></input>
              </div>

              <button type="submit">Update Transit</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    transitById: state.transitById
  }
}

export default connect(mapStateToProps)(TransitEdit);