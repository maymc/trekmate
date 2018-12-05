import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAccommodationByUser } from '../actions/actions';


class AccommodationDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {

        let userId = this.props.match.params.id;

        this.props.dispatch(getAccommodationByUser(userId))
    }

    render() {
        const accommodation = this.props.accommodation; console.log(accommodation);
        return accommodation.map(item => {
            return (
                <div key={item.id}>
                    <p>{item.lodging_name}</p>
                </div>
            )
        })
        // return (
        //     <div></div>
        // )

    }
}


const mapStateToProps = state => {
    return {
        accommodation: state
    }
}
export default connect(mapStateToProps)(AccommodationDetail);