import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAccommodationById } from '../actions/actions';


class AccommodationDetail extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(getAccommodationById(id))
    }

    render() {
        const { accommodation } = this.props;

        return (
            <div key={accommodation.id}>
                <p>{accommodation.lodging_name}</p>
                <p>{accommodation.address}</p>
                <p>${accommodation.price}</p>
                <p>{accommodation.reservation_code}</p>
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
export default connect(mapStateToProps)(AccommodationDetail);