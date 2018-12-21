import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Header extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {

  //     }
  //   }
  render() {
    if (localStorage.email) {
      return (
        <div className="header">
          <a href="/"><h1>TREK<span>mate</span></h1></a>
        <Router>
          <Link to='/users/account/:id'>User First Name</Link>
        </Router>
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

export default Header;
