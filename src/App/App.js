import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Header from '../Global/Header/HeaderComponent';
import Home from '../Home/Home/HomeComponent';

//~~~ User Login JSX files ~~~~//
import Login from '../Login/Login/LoginComponent';
import Register from '../Login/Register/RegisterComponent';
import ForgotPassword from '../Login/ForgotPassword/ForgotPasswordComponent';

//~~~ User Account JSX files ~~~~//
import Account from '../Account/Account/AccountComponent';
import EditAccount from '../Account/EditAccount/EditAccountComponent';
import EditPassword from '../Account/EditPassword/EditPasswordComponent';

//~~~ Accommodations JSX files ~~~~//
import AccommodationAdd from '../Accommodation/AccommodationAdd';

//~~~ Flights JSX files ~~~~//
import FlightAdd from '../Flight/FlightAdd';

//~~~ Activities JSX files ~~~~//
import ActivityAdd from '../Activity/ActivityAdd';

//~~~ Trip JSX files ~~~~//
import Trip from '../Trip/Trip/TripComponent';
import CreateTrip from '../Trip/CreateTrip/CreateTripComponent';
import EditTrip from '../Trip/EditTrip/EditTrip';

//Redux setup
import { connect } from 'react-redux';

//Import actions

class App extends Component {
  constructor(props) {
    super(props)

    // //State is an object, React handles state to do updates
    // this.state = {

    // }
  }

  //Lifecycle Methods
  componentDidMount() {
    console.log("App - this.props:", this.props);
  }

  //App Component - render html elements
  render() {
    return (
      <div className="app">
        <Header />
        <Router className="maincontent">
          <Switch>
            {/* Login Routes */}
            <Route exact path='/' component={Home} />
            <Route path='/login/forgotPassword' component={ForgotPassword} />
            <Route path='/login/register' component={Register} />
            <Route path='/login' component={Login} />

            {/* User account Routes */}
            <Route path='/account/edit_password/:id' component={EditPassword} />
            <Route path='/account/edit/:id' component={EditAccount} />
            <Route path='/account/:id' component={Account} />

            {/* Accommodation Routes */}
            <Route path='/accommodations/add' component={AccommodationAdd} />

            {/* Flight Routes */}
            <Route path='/flights/add' component={FlightAdd} />

            {/* Flight Routes */}
            <Route path='/activities/add' component={ActivityAdd} />

            {/* Trip Routes */}
            <Route path='/trip/create' component={CreateTrip} />
            <Route path='/trip/edit/:id' component={EditTrip} />
            <Route path='/trip/:id' component={Trip} />
          </Switch>
        </Router>

      </div>
    );
  }
}

//Export App component so other components can use it
export default connect()(App);
