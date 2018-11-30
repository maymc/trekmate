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
          <a href="/"><h1>TREKmate</h1></a>
          {/* <form method="get" action="/login">
            <button type="submit">Login</button>
          </form> */}
        </div>
      );
    }

}

export default Header;
