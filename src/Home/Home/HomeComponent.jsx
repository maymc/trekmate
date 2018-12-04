import React, { Component } from 'react';
import './styles.css';

import LocationSearch from '../../Global/Search/LocationSearchComponent';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="animation">
          <img src="https://cdn.dribbble.com/users/722246/screenshots/4400319/loading_crescor_dribbble.gif" alt="Travel animation"></img>
        </div>
        <div className="homecontent">
          <div className="homelocationsearch">
            <LocationSearch />
          </div>
        </div>
        {/* <a href="">Test Link</a>
        <button>Test button</button> */}
      </div>
    );
  }
}

export default Home;