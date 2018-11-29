import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { addUser } from '../../actions/actions.js';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null
    }
  }

  //Lifecycle Methods
  componentDidMount() { }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log("Register - handleChange this.state:", this.state);
  }

  handleSubmit = (e) => {
    console.log("Register - handleSubmit this.props:", this.props);
    e.preventDefault();
    console.log("New user has been registered!", this.state);
    this.props.dispatch(addUser(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input onChange={this.handleChange} type='text' name="first_name" placeholder="enter first name" />
        <br /><br />

        <label>Last Name</label>
        <input onChange={this.handleChange} type='text' name="last_name" placeholder="enter last name" />
        <br /><br />

        <label>Email</label>
        <input onChange={this.handleChange} type='text' name="email" placeholder="enter email" />
        <br /><br />

        <label>Password</label>
        <input onChange={this.handleChange} type='text' name="password" placeholder="enter password" />
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    )
  }
}


// export default connect()(Register);
export default Register;