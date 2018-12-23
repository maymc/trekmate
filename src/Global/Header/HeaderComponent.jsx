import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { getUserById } from '../../actions/actions.js';
import { connect } from 'react-redux';


let id = localStorage.userId;

class Header extends Component {
  //   constructor(props) {
    //     super(props)
    //     this.state = {
      
      //     }
      //   }
  componentDidMount() {
    console.log("Setting localStorage userId:", localStorage.userId);
    this.props.dispatch(getUserById(localStorage.userId));
    this.props.dispatch(getUserById(id));
  }
  
  render() {
    console.log('props!!', this.props)
    if (localStorage.email) {
      return (
        <div className="header">
          <a href="/"><h1>TREK<span>mate</span></h1></a>

          <form method="get" action={`/users/account/${id}`}> 
          <button className="ghost" type="submit"><i className="spacebottom far fa-user-circle"></i> {this.props.userById.first_name}</button>
          {/* <Link to=>{this.props.userById.first_name}</Link> */}

          </form>
    
        </div>
      );
    } else {
      return (
        <div className="header">
          <a href="/"><h1>TREK<span>mate</span></h1></a>
          <form method="get" action="/auth/login">
            <button className="ghost" type="submit">Login</button>
          </form>
        </div>
      );

    }
  }
}

const mapStateToProps = state => {
  return {
    userById: state.userById,
  }
  // return state
}
export default connect(mapStateToProps)(Header);
