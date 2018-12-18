import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editTrip, getTripById } from '../../actions/actions';

class EditTrip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      state: null,
      country: null,
      start_date: null,
      end_date: null,
      collaborators: 1,
      user_id: null
    }
  }

  //Lifecycle Methods
  componentDidMount() {
    //This id comes from the url
    const tripId = this.props.match.params.id;
    console.log("Setting tripId:", this.props);

    this.props.dispatch(getTripById(tripId));

    // if (this.props.startdate === undefined) {
    //   return
    // }
    // else {
    //   this.setState({
    //     title: this.props.title,
    //     tripid: this.props.detail.id,
    //     userid: this.props.detail.user_id,
    //     id: this.props.detail.id,
    //     type: this.props.type,
    //     dateone: this.props.date.date,
    //     monthone: this.props.date.month,
    //     timeone: this.props.time,
    //   })
    // }
  }

  //Helper Functions
  handleChange = (e) => {
    console.log("EditTrip - handleChange")
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.tripById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - EditTrip - this.props:", this.props);
    console.log("\nhandleSubmit - EditTrip - this.props.tripById.id:", this.props.tripById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editTrip(this.state, this.props.tripById.id));

    //Redirect to trip page
    this.props.history.push(`/users/account/${this.props.tripById.user_id}/trips/${this.props.tripById.id}`);
  }
  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      let weekday = [];
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      let month = [];
      month[0] = "JAN";
      month[1] = "FEB";
      month[2] = "MAR";
      month[3] = "APR";
      month[4] = "MAY";
      month[5] = "JUN";
      month[6] = "JUL";
      month[7] = "AUG";
      month[8] = "SEPT";
      month[9] = "OCT";
      month[10] = "NOV";
      month[11] = "DEC";

      let day = weekday[d.getDay()]

      // console.log('Date', d)
      return {
        day: weekday[d.getDay()],
        date: d.getDate(),
        month: month[d.getMonth()],
        year: d.getFullYear()
  
      }
    }
  }

  render() {
    let startdate = this.dateFormatter(this.props.tripById.start_date)
    // let startdatemonth = startdate.month
    // console.log("sadasdathis.props:", this.props.tripById);
    return (
      <div className="container col12">
      <div className="wrap-form">
        <form className="col12" onSubmit={this.handleSubmit}>
        {/* <div className="formtop">
              <LocationSearch title="Where should we go?" updateAddress={this.updateAddress} />
        </div> */}
        <div className="formbottom">
        <h2 className="blue">Where should we go?</h2>
          <div className="form-group">
            <input type="text" id="city" name="city" onChange={this.handleChange} className="form-control" value={this.props.tripById.city} required></input>
            <label className="form-control-placeholder" htmlFor="city">City</label>
          </div>
          <label>State</label>
          <select name="state" onChange={this.handleChange}>
            {/* <option value="select-state">Select State</option> */}
            <option >{this.props.tripById.state}</option>
            <option value="AK">Not Applicable</option>
            <option value="AK">AK</option>
            <option value="AL">AL</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">ID</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NV</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
          <div className="form-group">
            <input type="text" id="country" name="country" onChange={this.handleChange} className="form-control" value={this.props.tripById.country} required></input>
            <label className="form-control-placeholder" htmlFor="country">Country</label>
          </div>
          {/* <div className="form-group">
            <input type="text" id="startdate" name="country" onChange={this.handleChange} className="form-control" value={startdatemonth} required></input>
            <label className="form-control-placeholder" htmlFor="startdate">Start date</label>
          </div> */}
          <div>
                <label className="blue formsection">Dates</label>
                {/* <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })}   // PropTypes.func.isRequired,
                /> */}
          </div>

          <button type="submit">Create Trip</button>
        </div>
        </form>
      </div>
      </div>
      // <form onSubmit={this.handleSubmit}>
      //   <label>City</label><br />
      //   <input onChange={this.handleChange} type='text' name="city" defaultValue={this.props.tripById.city} />
      //   <br /><br />
      //   <label>State</label><br />
      //   <input onChange={this.handleChange} type='text' name="state" defaultValue={this.props.tripById.state} />
      //   <br /><br />

      //   <label>Country</label><br />
      //   <input onChange={this.handleChange} type='text' name="country" defaultValue={this.props.tripById.country} />
      //   <br /><br />

      //   <label>Start Date</label><br />
      //   <input onChange={this.handleChange} type='text' name="start_date" defaultValue={this.props.tripById.start_date} />
      //   <br /><br />

      //   <label>End Date</label><br />
      //   <input onChange={this.handleChange} type='text' name="end_date" defaultValue={this.props.tripById.end_date} />
      //   <br /><br />

      //   <button type="submit">Update Trip Info</button>
      // </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    tripById: state.tripById
  }
}

export default connect(mapStateToProps)(EditTrip);