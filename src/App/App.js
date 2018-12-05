import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import JSX component files
import Header from '../Global/Header/HeaderComponent';
import Footer from '../Global/Footer/FooterComponent';
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

//~~~ Activities JSX files ~~~~//
import TransitAdd from '../Transit/TransitAdd';

//~~~ Trip JSX files ~~~~//
import Trip from '../Trip/Trip/TripComponent';
import CreateTrip from '../Trip/CreateTrip/CreateTripComponent';
import EditTrip from '../Trip/EditTrip/EditTrip';
import Accommodation from '../Accommodation/Accommodation';

//Redux setup
// import { connect } from 'react-redux';
// import { getAllUsers, getAllAccommodations } from '../actions/actions.js';

//Import actions

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  //Lifecycle Methods
  componentDidMount() {
    console.log("App - this.props:", this.props);
  }

  //App Component - render html elements
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
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

            {/* Trip Routes */}
            <Route path='/trips/add' component={CreateTrip} />
            <Route path='/trip/edit/:id' component={EditTrip} />
            <Route path='/trip/:id' component={Trip} />

            {/* Accommodation Routes */}
            <Route path='/accommodation' component={Accommodation} />
            <Route path='/accommodations/add' component={AccommodationAdd} />

            {/* Flight Routes */}
            <Route path='/flights/add' component={FlightAdd} />

            {/* Activity Routes */}
            <Route path='/activities/add' component={ActivityAdd} />

            {/* Transit Routes */}
            <Route path='/transit/add' component={TransitAdd} />

          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

//Redux----------------
// const mapStateToProps = (state) => {   // listening to reducers
//   return {
//     users: state,
//     accommodations: state

//   }
// }

// const ConnectedApp = connect( //connect app to access the 'store'
//   mapStateToProps,
//   { getAllUsers, getAllAccommodations }
// )(App);

//Export App component so other components can use it
export default App;
