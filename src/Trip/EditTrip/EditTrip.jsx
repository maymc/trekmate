import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editTrip, getTripById, deleteTrip } from '../../actions/actions';

class EditTrip extends Component {
  constructor(props) {
    super(props)
  }

  //Lifecycle Methods
  componentDidMount() {
    // console.log("CDM Props", this.props)
    let tripId = this.props.match.params.id
    this.props.dispatch(getTripById(tripId))
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
  onClick = () => {
    let tripId = this.props.match.params.id;
    // event.preventDefault();
    this.props.dispatch(deleteTrip(tripId))
  }

  dateFormatter(date) {
    if (date === undefined) {
      return
    }
    else {
      let d = new Date(date)
      var n = d.toDateString();
      return n
    }
  }

  render() {
    console.log("sadasdathis.props:", this.props);
    return (
      <div className="container col12">
        <div className="wrap-form">
          <form className="col12" onSubmit={this.handleSubmit}>
            <div className="formbottom">
              <h2 className="blue inlineblock">Update your trip to
              {this.props.tripById.city}
              </h2>
              <Link className='right' to={`/}`} onClick={this.onClick}>Delete trip</Link>
              <div className="form-group">
                <input type="text" id="city" name="city" onChange={this.handleChange} className="form-control" value={this.props.tripById.city} required></input>
                <label className="form-control-placeholder" htmlFor="city">City</label>
              </div>
              <div></div>
              <label>State</label>
              <select name="state" onChange={this.handleChange}>
                <option value={this.props.tripById.country} >{this.props.tripById.state} </option>
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
                <input type="text" id="country" name="country" onChange={this.handleChange} className="form-control" value={this.props.tripById.country}></input>
                <label className="form-control-placeholder" htmlFor="country">Country</label>
              </div>
              <div className="form-group">
                <input type="text" id="dateone" name="start_date" onChange={this.handleChange} className="form-control" value={this.dateFormatter(this.props.tripById.start_date)}></input>
                <label className="form-control-placeholder" htmlFor="dateone">Start date</label>
              </div>
              <div className="form-group">
                <input type="text" id="datetwo" name="start_date" onChange={this.handleChange} className="form-control" value={this.dateFormatter(this.props.tripById.end_date)}></input>
                <label className="form-control-placeholder" htmlFor="datetwo">End date</label>
              </div>

              <button type="submit">Update</button>


            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tripById: state.tripById
  }
}

export default connect(mapStateToProps)(EditTrip);