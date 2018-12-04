import React, { Component } from 'react';
import './styles.css'

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
      user_id: 1
    }
  }

  //Lifecycle Methods
  componentDidMount() {

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
  }

  //App Component - functions
  //Never mutate 'state' directly, use 'this.setState' (use ES6 to bind)

  //App Component - render html elements
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>City</label>
          <input onChange={this.handleChange} type='text' name="city" placeholder="enter city" />
          <br /><br />

          <label>State</label>
          <select name="state" onChange={this.handleChange}>
            <option value="select-state">Select State</option>
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
          <br /><br />

          <label>Country</label>
          <input onChange={this.handleChange} type='text' name="country" placeholder="enter country" />
          <br /><br />

          <label>Start Date</label>
          <input onChange={this.handleChange} type='text' name="start_date" placeholder="MM/DD/YY" />
          <br /><br />

          <label>End Date</label>
          <input onChange={this.handleChange} type='text' name="end_date" placeholder="MM/DD/YY" />
          <br /><br />

          <button type="submit">Create Trip</button>
        </form>
      </div>
    );
  }
}

export default connect()(CreateTrip);
