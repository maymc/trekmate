import React, { Component } from 'react';
// import { requestPassword } from '../../actions/actions';
// import { connect } from 'react-redux';
// const tempPassword = Math.random().toString(36).slice(-8);

class RequestPassword extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('mounting...');
        // this.props.dispatch(requestPassword())
    }
    render() {
        return (
            <h1>check your email!</h1>
        )
    }
}

export default RequestPassword;