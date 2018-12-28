import React, { Component } from 'react';
import './styles.css';
import LocationSearch from '../../Global/Search/LocationSearchComponent';

//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

//Redux Setup
import { connect } from 'react-redux';


//Import actions
import { addTrip } from '../../actions/actions';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      state: "",
      country: "",
      startDate: null,
      endDate: null,
      user_id: null,
      collaborators: 1,
    }
  }
  //Lifecycle Methods
  componentDidMount() {
    console.log('Trip', this.props)
    let id = localStorage.userId

    console.log('H CDM', id)
    this.setState({
      user_id: Number(id)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user_id === null || this.state.user_id === undefined || this.state.user_id === NaN) {
      this.props.history.push(`/auth/login`);
    } else {
      console.log("Homepage - handleSubmit this.props:", this.props);
      console.log("New trip has been created!", this.state);

      this.props.dispatch(addTrip(this.state));
      this.props.history.push(`/users/account/${this.state.user_id}`);
    }
  }


  updateAddress = (address, lodging_name) => {
    let spl = address.split(",")
    console.log(spl)

    this.setState({
      city: spl[0],
      country: spl[2] || spl[1] || null,
    })
    console.log("Parent method, update address", this.state)
  }


  render() {

    console.log('Home', this.state)
    if (this.state.city === null && this.state.endDate === null) {
      return (
        <div className="container col12 home">
          <div id="homeimage" className="animation">
            <img src="https://cdn.dribbble.com/users/722246/screenshots/4400319/loading_crescor_dribbble.gif" alt="Travel animation"></img>
          </div>
          <div className="homecontent">
            <div className="homelocationsearch">
              <LocationSearch title="Where should we go?" updateAddress={this.updateAddress} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.endDate === null) {
      return (
        <div className="container col12 home">
          <div className="animation2">
            <img src="https://cdn.dribbble.com/users/722246/screenshots/4400319/loading_crescor_dribbble.gif" alt="Travel animation"></img>
          </div>
          <div className="homecontent">
            <div className="homedateset">
              <h1 className="blue spacebottom">{this.state.city},<span>{this.state.country}</span></h1>
              <h3 className="spacebottom">When are we going?</h3>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })}   // PropTypes.func.isRequired,
                block={true}
              />
            </div>
          </div>
          {/* <a href="">Test Link</a>
          <button>Test button</button> */}
        </div>
      );

    }
    else {
      return (
        <div className="container col12 home">
          <div className="animation2">
            <img src="https://cdn.dribbble.com/users/722246/screenshots/4400319/loading_crescor_dribbble.gif" alt="Travel animation"></img>
          </div>
          <div className="homecontent">
            <div className="homedateset">
              <h1 className="blue spacebottom">{this.state.city},<span>{this.state.country}</span></h1>
              <h3 className="spacebottom">When are we going?</h3>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                block={true}   // PropTypes.func.isRequired,
              />
              <form onSubmit={this.handleSubmit}>
                <button className="spacetop" type="submit">Save trip</button>
              </form>
            </div>
          </div>
        </div>
      );

    }
  }
}

export default connect()(Home);

