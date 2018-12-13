import React, { Component } from 'react';
import './styles.css';


class Header extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {

  //     }
  //   }
  render() {

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

export default Header;
