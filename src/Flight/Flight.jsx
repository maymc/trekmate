import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files


class Flight extends Component {
  constructor(props) {
    super(props)

    //State is an object, React handles state to do updates
    this.state = {

    }
  }

  //Lifecycle Methods
  componentDidMount() {

  }

  //App Component - functions
  //Never mutate 'state' directly, use 'this.setState' (use ES6 to bind)





  //App Component - render html elements
  render() {
    return (
      <div>
       Flight Page
      </div>
    );
  }
}

export default Flight;
