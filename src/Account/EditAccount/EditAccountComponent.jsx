import React, { Component } from 'react';
import './styles.css';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editUser, getUserById } from '../../actions/actions';

class EditAccountComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.userById.id,
      first_name: this.props.userById.first_name,
      last_name: this.props.userById.last_name,
      email: this.props.userById.email
    }
  }

  //Lifecycle Methods
  componentDidMount() {

    //This id comes form the url
    const userId = this.props.match.params.id;
    console.log("Setting userId:", userId);

    this.props.dispatch(getUserById(userId));
  }

  //Helper functions
  handleChange = (e) => {
    console.log("EditAccountComponent - handleChange")
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      id: this.props.userById.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("\nhandleSubmit - UserEdit - this.props:", this.props);
    console.log("\nhandleSubmit - UserEdit - this.props.userById.id:", this.props.userById.id);
    console.log("Updated to this.state:", this.state);

    this.props.dispatch(editUser(this.state, this.props.userById.id));

    // Redirect to user's account page
    this.props.history.push(`/users/account/${this.props.userById.id}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>First Name</label>
          <input onChange={this.handleChange} type='text' name="first_name" defaultValue={this.props.userById.first_name} />
          <br /><br />

          <label>Last Name</label>
          <input onChange={this.handleChange} type='text' name="last_name" defaultValue={this.props.userById.last_name} />
          <br /><br />

          <label>Email</label>
          <input onChange={this.handleChange} type='text' name="email" defaultValue={this.props.userById.email} />
          <br /><br />

          <button type="submit">Update Account Info</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // activities: state.activities,
    userById: state.userById
  }
}

export default connect(mapStateToProps)(EditAccountComponent);