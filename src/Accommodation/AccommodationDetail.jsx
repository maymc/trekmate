import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DateComponent from '../Global/Date/DateComponent'

//------Redux------//
import { connect } from 'react-redux';
import { getAccommodationById } from '../actions/actions';

class AccommodationDetail extends Component {

    componentDidMount() {
        const accommodationId = this.props.match.params.id;
        console.log("Setting accommodationId:", accommodationId);
        console.log("Accommodation Detail component Mounted Successfully");

        this.props.dispatch(getAccommodationById(accommodationId));
    }
    dateFormatter(date) {
        if (date === undefined) {
          return
        }
        else {
          let d = new Date(date)
          let weekday = [];
          weekday[0] = "Sunday";
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
        console.log("\nAccommodationDetail- this.props.accommodationById:", this.props.accommodationById)
        let accom = this.props.accommodationById

        return (
            <div key={this.props.accommodationById.id} className="container col12">
                <div className="pagebanner blue-bg">
                    <i className="spacebottom fas fa-5x fa-bed"></i>
                <h1>{accom.lodging_name}</h1>
                <Link className="drk" to={`/flights/trip/${this.props.accommodationById}`}> Delete accommodation
                </Link>
                </div>
                <div className="pagebody">
                    <Link to={`/users/account/${accom.user_id}/trips/${accom.trip_id}`}>
                        <i className="fas fa-arrow-left"></i> Back to trip
                    </Link>
                    <h2 className="pink" >Review</h2>
                    <div className="pagesection">
                        <h3 className="blue" >Dates</h3>
                        <DateComponent date={this.dateFormatter(accom.check_in_date)} />
                        <DateComponent date={this.dateFormatter(accom.check_out_date)} />
                    </div>
                    <div className="pagesection">
                        <h3 className="blue" >Details</h3>
                        <p><i className="fas fa-map-marker-alt"></i> Location: {accom.address}</p>
                        <p><i className="fas fa-clipboard-check"></i> Reservation Code: {accom.reservation_code}</p>
                        <p><i className="fas fa-dollar-sign"></i> Price: {accom.price}</p>
                        <p><i className="fas fa-hand-holding-usd"></i> Is paid? {accom.is_paid}</p>
                        <p><i className="far fa-sticky-note"></i> Notes: {accom.notes}</p>
                    </div>
                    <Link to={`/accommodation/edit/${accom.id}`}>
                        <button type='button'>Edit</button>
                    </Link>
                </div>
                {/* <p>Lodging Name:<br />

                <Link to={`/accommodation/edit/${this.props.accommodationById.id}`}>
                    <button type='button'>Edit Accommodation</button>
                </Link>
                <Link to={`/accommodations/trip/${this.props.accommodationById.trip_id}`}>
                    <button type='button'>Back</button>
                </Link> */}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        // accommodations: state.accommodations,
        accommodationById: state.accommodationById
    }
}
export default connect(mapStateToProps)(AccommodationDetail);