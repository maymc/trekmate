import React, { Component } from 'react';
// import axios from 'axios';


import { connect } from 'react-redux';

class RequestPassword extends Component {
    // constructor(props) {
    //     super(props)

    //     // this.state = {
    //     //     email: null,
    //     //     password: null
    //     // }
    // }
    componentDidMount() { }

    logIn = () => {
        this.props.history.push(`/auth/login`);

    }
    render() {
        return (
            < div className="container col12 forgotpassword" >
                <div className="formplace forgotpassword-form">
                    <h1>Temporary Password Email sent</h1>
                    <p>An temporary password has been sent to your email. Please login with your temporary password. </p>
                    <button className="spacetop" onClick={this.logIn}>Done</button>
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps)(RequestPassword);
