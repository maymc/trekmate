import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//------Redux------//
import { connect } from 'react-redux';
import { getAccommodationById } from '../actions/actions';

class AccommodationDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const accommodationId = this.props.match.params.id;
        console.log("Setting accommodationId:", accommodationId);
        console.log("Accommodation Detail component Mounted Successfully");

        this.props.dispatch(getAccommodationById(accommodationId));
    }

    render() {
        console.log("\nAccommodationDetail- this.props.accommodationById:", this.props.accommodationById)

        return (
            <div key={this.props.accommodationById.id}>
                <p>Lodging Name:<br />{this.props.accommodationById.lodging_name}</p>
                <br />
                <p>Address: <br />{this.props.accommodationById.address}</p>
                <br />
                <p>Check-In Date:<br />{this.props.accommodationById.check_in_date}</p>
                <br />
                <p>Check-Out Date:<br />{this.props.accommodationById.check_out_date}</p>
                <br />
                <p>Price: <br />{this.props.accommodationById.price}</p>
                <br />
                <p>Pay Status: <br />
                    {this.props.accommodationById.is_paid}</p>
                <br />
                <p>Reservation: <br />{this.props.accommodationById.reservation_code}</p>
                <br />
                <p>Notes: <br />{this.props.accommodationById.notes}</p>
                <Link to={`/accommodation/edit/${this.props.accommodationById.id}`}>
                    <button type='button'>Edit Accommodation</button>
                </Link>
                <Link to={`/accommodations/trip/${this.props.accommodationById.trip_id}`}>
                    <button type='button'>Back</button>
                </Link>
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