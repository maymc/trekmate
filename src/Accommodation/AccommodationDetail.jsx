import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAccommodation } from '../actions/actions';


class AccommodationDetail extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(getAccommodation(id))
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
        accommodation: state
    }
}
export default connect(mapStateToProps)(AccommodationDetail);