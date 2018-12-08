import React, { Component } from 'react';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editAccommodation, getAccommodationById, fillInEditAccommodation } from '../actions/actions';

class AccommodationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.accommodationById.id,
      lodging_name: this.props.accommodationById.lodging_name,
      address: this.props.accommodationById.address,
      check_in_date: this.props.accommodationById.check_in_date,
      check_out_date: this.props.accommodationById.check_out_date,
      price: this.props.accommodationById.price,
      is_paid: this.props.accommodationById.is_paid,
      reservation_code: this.props.accommodationById.reservation_code,
      notes: this.props.accommodationById.notes,
      user_id: this.props.accommodationById.user_id,
      trip_id: this.props.accommodationById.trip_id
    }
  }

  // //This will set state from props everytime props changes
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("What is next props?:", nextProps);
  //   console.log("What is prev state", prevState);

  //   if (nextProps.accommodationById !== prevState.accommodationById) {
  //     return {
  //       original: {
  //         id: nextProps.accommodationById.id,
  //         lodging_name: nextProps.accommodationById.lodging_name,
  //         address: nextProps.accommodationById.address,
  //         check_in_date: nextProps.accommodationById.check_in_date,
  //         check_out_date: nextProps.accommodationById.check_out_date,
  //         price: nextProps.accommodationById.price,
  //         is_paid: nextProps.accommodationById.is_paid,
  //         reservation_code: nextProps.accommodationById.reservation_code,
  //         notes: nextProps.accommodationById.notes,
  //       }
  //     };
  //   }
  //   else return null;
  // }

  //Lifecycle Methods
  componentDidMount() {

    //This id comes from the url
    const accommodationId = this.props.match.params.id;
    console.log("Setting accommodationId:", accommodationId);

    this.props.dispatch(getAccommodationById(accommodationId));
  }

  //Helper Functions
  handleChange = (e) => {
    console.log("AccommodationEdit - handleChange")
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.accommodationById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - AccommodationEdit - this.props:", this.props);
    console.log("\nhandleSubmit - AccommodationEdit - this.props.accommodationById.id:", this.props.accommodationById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editAccommodation(this.state, this.props.accommodationById.id));

    //Redirect to accommodations page
    this.props.history.push(`/accommodations`);
  }

  // //Submit an object called form and iterate over this.state with for...in to check for which data to use (org data vs newly changed data)
  // submittingForm = () => {
  //   let form = {};

  //   for (const key in this.state) {
  //     if (this.state[key] === "") {
  //       form[key] = this.state.original[key]
  //     } else {
  //       form[key] = this.state[key]
  //     }
  //   }
  //   //Because form was created from an iteration of this.state, form now also includes original. Delete original to dispatch a clean form to axios
  //   delete form.original;

  //   return form;
  // }

  // fillInEditAccommodation = () => {
  //   this.props.dispatch(
  //     fillInEditAccommodation(this.props.accommodationById.id, this.submittingForm())
  //   );
  // }

  render() {
    console.log("AccommodationEdit - render - this.props:", this.props);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Lodging</label><br />
          <input onChange={this.handleChange} type='text' name="lodging_name" defaultValue={this.props.accommodationById.lodging_name} />
          <br /><br />

          <label>Address</label><br />
          <input onChange={this.handleChange} type='text' name="address" defaultValue={this.props.accommodationById.address} />
          <br /><br />

          <label>Check In</label><br />
          <input onChange={this.handleChange} type='text' name="check_in_date" defaultValue={this.props.accommodationById.check_in_date} />
          <br /><br />

          <label>Check Out</label><br />
          <input onChange={this.handleChange} type='text' name="check_out_date" defaultValue={this.props.accommodationById.check_out_date} />
          <br /><br />

          <label>Price</label><br />
          <input onChange={this.handleChange} type='text' name="price" defaultValue={this.props.accommodationById.price} />
          <br /><br />

          <label>Pay Status (Yes/No)</label><br />
          <input onChange={this.handleChange} type='text' name="is_paid" defaultValue={this.props.accommodationById.is_paid} />
          <br /><br />

          <label>Reservation Code</label><br />
          <input onChange={this.handleChange} type='text' name="reservation_code" defaultValue={this.props.accommodationById.reservation_code} />
          <br /><br />

          <label>Notes</label><br />
          <input onChange={this.handleChange} type='text' name="notes" defaultValue={this.props.accommodationById.notes} />
          <br /><br />

          {/* <button type="submit" value="Save draft for later" onClick={this.fillInEditAccommodation}>Update Accommodation</button> */}

          <button type="submit">Update Accommodation</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accommodations: state.accommodations,
    accommodationById: state.accommodationById
  }
}

export default connect(mapStateToProps)(AccommodationEdit);