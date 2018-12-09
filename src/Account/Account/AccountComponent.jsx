import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Import JSX components
import EditAccountComponent from '../EditAccount/EditAccountComponent.jsx';
import ActivityEdit from '../../Activity/ActivityEdit.jsx';
import TransitEdit from '../../Transit/TransitEdit.jsx';

//Redux
import { connect } from 'react-redux';
import { getUserById } from '../../actions/actions';

class Account extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.match.params.id;
    console.log("Setting userId:", userId);
    console.log("\nAccountComponent Mounted Successfully");

    this.props.dispatch(getUserById(userId));
  }

  render() {
    console.log("\nAccountComponent - this.props.userById:", this.props.userById);

    return (
      <div className="account">
        <div className="accountbanner">
          <div className="userimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5av85FUBFtE6pEih8IFJHXT5Z4VT6xKS0EIdifBdqlhcIfkLfQQ" alt="User image"></img>
          </div>
          <div className="userdata">
            <h1>{this.props.userById.first_name}<span>, {this.props.userById.last_name}</span></h1>
            <p>{this.props.userById.email}</p>
            <Link to={`/users/account/edit/${this.props.userById.id}`}>Edit</Link>
            <Link to={`/users/account/edit_password/${this.props.userById.id}`} >Update Password</Link>
          </div>
        </div>
        <div className="accountfeed">
        </div>
        <div className="accountbar">
          {/* <h3>Create a new trip:</h3> */}
          <form method="get" action="/trips/add">
            <button type="submit"><i className="fas fa-suitcase"></i> Create new trip</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userById: state.userById,
  }
}
export default connect(mapStateToProps)(Account);