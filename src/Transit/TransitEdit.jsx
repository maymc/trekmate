import React, { Component } from 'react';
import './styles.css';

class TransitEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      type: null,
      date: null,
      time: null,
      reservation: null,
      price: null
    }
  }

  //Helper functions
  handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log("Login - handleLogin this.props:", this.props);
    console.log("Login Successful! User credentials:", this.state);
    this.props.history.push(`/`); //change this to authenticated view when created
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>Type</label>
          <input onChange={this.handleChange} type='text' name="type" placeholder="edit type of transit" />
          <br /><br />

          <label>Date</label>
          <input onChange={this.handleChange} type='text' name="date" placeholder="edit transit date" />
          <br /><br />

          <label>Time</label>
          <input onChange={this.handleChange} type='text' name="time" placeholder="edit transit time" />
          <br /><br />

          <label>Reservation</label>
          <input onChange={this.handleChange} type='text' name="reservation" placeholder="edit transit reservation" />
          <br /><br />

          <label>Price</label>
          <input onChange={this.handleChange} type='text' name="price" placeholder="edit price of transit" />
          <br /><br />

        </form>
      </div>
    )
  }
}


export default TransitEdit;