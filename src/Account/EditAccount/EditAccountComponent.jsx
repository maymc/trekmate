import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

//Redux Setup
import { connect } from 'react-redux';

//Import actions
import { editUser, getUserById } from '../../actions/actions';

class EditAccount extends Component {
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
    // console.log("Setting userId:", userId);

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
    // console.log("\nhandleSubmit - UserEdit - this.props:", this.props);
    // console.log("\nhandleSubmit - UserEdit - this.props.userById.id:", this.props.userById.id);
    // console.log("Updated to this.state:", this.state);

    this.props.dispatch(editUser(this.state, this.props.userById.id));

    // Redirect to user's account page
    this.props.history.push(`/users/account/${this.props.userById.id}`);
  }

  render() {
    // console.log('props', this.props)
    return (
      <div className="container col12">
        <div className="formplace">
          <h1>Update account info</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <input autoFocus type="text" id="firstname" name="first_name" onChange={this.handleChange} className="form-control" defaultValue={this.props.userById.first_name}></input>
              <label className="form-control-placeholder" htmlFor="firstname">First Name</label>
            </div>
            <div className="form-group">
              <input type="text" id="lastname" name="last_name" onChange={this.handleChange} className="form-control" defaultValue={this.props.userById.last_name}></input>
              <label className="form-control-placeholder" htmlFor="lastname">Last Name</label>
            </div>
            <div className="form-group">
              <input autoComplete="username" type="text" id="email" name="email" onChange={this.handleChange} className="form-control" defaultValue={this.props.userById.email}></input>
              <label className="form-control-placeholder" htmlFor="email">Email</label>
            </div>

            <button className="formbutton" type="submit">Update</button>
          </form>
          <Link to={`/users/account/${this.props.userById.id}`}>
            Cancel
          </Link>
        </div>
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

export default connect(mapStateToProps)(EditAccount);