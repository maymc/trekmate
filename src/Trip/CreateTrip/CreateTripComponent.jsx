import React, { Component } from 'react';
import './styles.css'
import LocationSearch from '../../Global/Search/LocationSearchComponent';
//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { addTrip } from '../../actions/actions';


class CreateTrip extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
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
    console.log('Trip', this.props)
    let id = (this.props.location.search).split("?")
    
    // console.log('Temp', id[1])
    this.setState({
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
    console.log("CreateTrip - handleSubmit this.props:", this.props);
    console.log("New trip has been created!", this.state);

    this.props.dispatch(addTrip(this.state));
    this.props.history.push(`/users/account/${this.state.user_id}`);
  }

  // updateAddress = (address, lodging_name) => {
  //   // this.setState({
  //   //   lodging_name: lodging_name,
  //   //   address: address
  //   // })
  //   console.log("Parent method, update address", address, lodging_name)
  // }

  //App Component - functions
  //Never mutate 'state' directly, use 'this.setState' (use ES6 to bind)

  //App Component - render html elements
  render() {
    console.log('CT', this.state)
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
            <input type="text" id="city" name="city" onChange={this.handleChange} className="form-control" required></input>
            <label className="form-control-placeholder" htmlFor="city">City</label>
          </div>
          <label>State</label>
          <select name="state" onChange={this.handleChange}>
            <option value="select-state">Select State</option>
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
            <input type="text" id="country" name="country" onChange={this.handleChange} className="form-control" required></input>
            <label className="form-control-placeholder" htmlFor="country">Country</label>
          </div>
          <div>
                <label className="blue formsection">Dates</label>
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

          <button type="submit">Create Trip</button>
        </div>
        </form>
      </div>
      </div>
    );
  }
}

export default connect()(CreateTrip);
