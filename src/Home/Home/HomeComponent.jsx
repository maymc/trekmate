import React, { Component } from 'react';
import './styles.css';

import LocationSearch from '../../Global/Search/LocationSearchComponent';
//Date picker
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';


class Home extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      city: null,
      state: null,
      country: null
    }
  }
  getdets = (address) => {
    console.log("get dets", address)
  }
  updateAddress = (address, lodging_name) => {
    let spl = address.split(",")
    console.log(spl)
  
    this.setState({
      city: spl[0],
      state: spl[1] || null,
      country: spl[2] || null,
    })
    console.log("Parent method, update address", this.state)
  } 

  render() {
    console.log('Home', this.state)
    return (
      <div className="container col6 home">
        <div className="animation">
          <img src="https://cdn.dribbble.com/users/722246/screenshots/4400319/loading_crescor_dribbble.gif" alt="Travel animation"></img>
        </div>
        <div className="homecontent">
          <div className="homelocationsearch">
            <LocationSearch title="Where should we go?" getdets={this.getdets} updateAddress={this.updateAddress} />
            <h1>{this.state.city}</h1>
          </div>
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
        {/* <a href="">Test Link</a>
        <button>Test button</button> */}
      </div>
    );
  }
}

export default Home;