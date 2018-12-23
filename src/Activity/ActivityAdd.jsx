import React, { Component } from 'react';
import LocationSearch from '../Global/Search/LocationSearchComponent';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addActivity } from '../actions/actions';

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

class ActivityAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activity_name: null,
      location: null,
      date: null,
      time: null,
      price: null,
      type: null,
      votes: 1,
      reservation: null,
      notes: null,
      image: "http://dummyimage.com/150x150.jpg/cc0000/ffffff",
      user_id: null,
      trip_id: null
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    let id = (this.props.location.search).split("?")

    this.setState({
      trip_id: Number(id[2]),
      user_id: Number(id[1])
    })
  }

  //Helper Functions
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ActivityAdd - handleSubmit this.props:", this.props);
    console.log("Activity Added!", this.state);

    this.props.dispatch(addActivity(this.state));
    this.props.history.push(`/users/account/${this.state.user_id}/trips/${this.state.trip_id}`);
  }

  updateActivity = (address, lodging_name) => {
    this.setState({
      activity_name: lodging_name,
      location: address
    })
    // console.log("Parent method, update address", this.state)
  }

  updateTime = (value) => {
    // console.log(value.format(format));
    this.setState({
      time: value.format(format)
    })
  }

  render() {
    console.log('Activity this.state:', this.state)

    // console.log('Props', this.props)
    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>
            <div className="formtop">
              <LocationSearch title="What are we doing?" updateAddress={this.updateActivity} />
            </div>
            <div className="formbottom">
              <h2 className="blue">Activity</h2>
              <div className="form-group">
                <input type="text" id="name" name="activity_name" onChange={this.handleChange} className="form-control" value={this.state.activity_name} required></input>
                <label className="form-control-placeholder" htmlFor="name">Activity name</label>
              </div>
              <div className="form-group">
                <input type="text" id="location" name="location" onChange={this.handleChange} className="form-control" value={this.state.location} required></input>
                <label className="form-control-placeholder" htmlFor="location">Location</label>
              </div>
              <select className="formselect" name="type" onChange={this.handleChange}>
                <option value="select">What type of activity is this?</option>
                <option value="sightseeing">Sightseeing</option>
                <option value="outdoors">Outdoors</option>
                <option value="indoors">Indoors</option>
                <option value="food">Food</option>
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
                <TimePicker showSecond={false} defaultValue={now} className="reginput" onChange={this.updateTime} format={format} use12Hours inputReadOnly />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" min="0.00" max="10000.00" step="0.01" name="price" onChange={this.handleChange} className="reginput inputstyle" placeholder="$00.00"></input>
              </div>
              {/* <div className="form-group">
                <input type="text" id="image" name="image" onChange={this.handleChange} className="form-control" required></input>
                <label className="form-control-placeholder" htmlFor="image">Include an image (url)</label>
              </div> */}
              <div className="form-group">
                <label>Do you have a reservation?</label>
                <select name="reservation" onChange={this.handleChange}>
                  <option value="select">Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="blue formsection">Notes</label>
                <textarea onChange={this.handleChange} name="notes"></textarea>
              </div>
              <button type="submit">Add activity</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(ActivityAdd);