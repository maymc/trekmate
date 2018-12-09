import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Setup for redux
import { connect } from 'react-redux';

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

//~~~ Trip JSX files ~~~~//
import Trip from '../Trip/Trip/TripComponent';
import CreateTrip from '../Trip/CreateTrip/CreateTripComponent';
import EditTrip from '../Trip/EditTrip/EditTrip';

//~~~ Accommodations JSX files ~~~~//
import AccommodationAdd from '../Accommodation/AccommodationAdd';
import Accommodation from '../Accommodation/Accommodation';
import AccommodationEdit from '../Accommodation/AccommodationEdit';
import AccommodationDetail from '../Accommodation/AccommodationDetail';

//~~~ Activities JSX files ~~~~//
import ActivityAdd from '../Activity/ActivityAdd';
import Activity from '../Activity/Activity';
import ActivityEdit from '../Activity/ActivityEdit';
import ActivityDetail from '../Activity/ActivityDetail';

//~~~ Flights JSX files ~~~~//
import FlightAdd from '../Flight/FlightAdd';
import Flight from '../Flight/Flight';
import FlightEdit from '../Flight/FlightEdit';
import FlightDetail from '../Flight/FlightDetail';

//~~~ Activities JSX files ~~~~//
import Transit from '../Transit/Transit';
import TransitAdd from '../Transit/TransitAdd';

class App extends Component {
  constructor(props) {
    super(props)
  }

  //Lifecycle Methods
  componentDidMount() {
    console.log("\nApp Mounting...:", this.props);
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
            <Route exact path='/login' component={Login} />

            {/* User account Routes */}
            <Route path='/account/edit_password/:id' component={EditPassword} />
            <Route path='/account/edit/:id' component={EditAccount} />
            <Route path='/account/:id' component={Account} />

            {/* Trip Routes */}
            {/* <Route exact path='/trips' component={Trip} /> */}
            <Route path='/trip/edit/:id' component={EditTrip} />
            <Route path='/trip/:id' component={Trip} />
            <Route path='/trips/add' component={CreateTrip} />

            {/* Accommodation Routes */}
            <Route path='/accommodations/trip/:id' component={Accommodation} />
            <Route path='/accommodation/edit/:id' component={AccommodationEdit} />

            <Route path='/accommodations/add' component={AccommodationAdd} />
            {/* <Route path='/accommodations' component={Accommodation} /> */}
            <Route path='/accommodation/:id' component={AccommodationDetail} />

            {/* Flight Routes */}
            <Route path='/flights/trip/:id' component={Flight} />
            <Route path='/flight/edit/:id' component={FlightEdit} />
            <Route path='/flight/:id' component={FlightDetail} />
            <Route path='/flights/add' component={FlightAdd} />
            {/* <Route path='/flights' component={Flight} /> */}

            {/* Activity Routes */}
            <Route path='/activities/trip/:id' component={Activity} />
            <Route path='/activity/edit/:id' component={ActivityEdit} />
            <Route path='/activity/:id' component={ActivityDetail} />
            <Route path='/activities/add' component={ActivityAdd} />
            {/* <Route exact path='/activities' component={Activity} /> */}

            {/* Transit Routes */}
            <Route path='/transit/:id' component={Transit} />
            <Route path='/transit/add' component={TransitAdd} />

          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

// //Redux----------------
// const mapStateToProps = (state) => {   // listening to reducers
//   return {
//     users: state,
//     accommodations: state

//   }
// }

// const ConnectedApp = connect( //connect app to access the 'store'
//   mapStateToProps,
//   { getAllAccommodations }
// )(App);

//Export App component so other components can use it
export default connect()(App);
