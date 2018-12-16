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
import TripComponent from '../Trip/Trip/TripComponent';
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
import TransitAdd from '../Transit/TransitAdd';
import Transit from '../Transit/Transit';
import TransitEdit from '../Transit/TransitEdit';
import TransitDetail from '../Transit/TransitDetail';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

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
            <Route path='/auth/login/register' component={Register} />
            <Route exact path='/auth/login' component={Login} />

            {/* User account Routes */}
            <Route path='/users/account/:user_id/trips/:trip_id' component={TripComponent} />
            <Route path='/users/account/edit_password/:id' component={EditPassword} />
            <Route path='/users/account/edit/:id' component={EditAccount} />
            <Route path='/users/account/:id' component={Account} />

            {/* Trip Routes */}
            {/* <Route exact path='/trips' component={Trip} /> */}
            <Route path='/trips/edit/:id' component={EditTrip} />
            {/* <Route path='/trips/:id' component={TripComponent} /> */}
            <Route path='/trips/add' component={CreateTrip} />

            {/* Accommodation Routes */}
            <Route path='/accommodations/trip/:id' component={Accommodation} />
            <Route path='/accommodation/edit/:id' component={AccommodationEdit} />

            <Route path='/accommodations/add' component={AccommodationAdd} />
            <Route path='/accommodation/:id' component={AccommodationDetail} />

            {/* Activity Routes */}
            <Route path='/activities/trip/:id' component={Activity} />
            <Route path='/activity/edit/:id' component={ActivityEdit} />
            <Route path='/activity/:id' component={ActivityDetail} />
            <Route path='/activities/add' component={ActivityAdd} />
            {/* <Route exact path='/activities' component={Activity} /> */}

            {/* Flight Routes */}
            <Route path='/flights/trip/:id' component={Flight} />
            <Route path='/flight/edit/:id' component={FlightEdit} />
            <Route path='/flight/:id' component={FlightDetail} />
            <Route path='/flights/add' component={FlightAdd} />
            {/* <Route path='/flights' component={Flight} /> */}

            {/* Transit Routes */}
            <Route path='/transit/trip/:id' component={Transit} />
            <Route path='/transit/edit/:id' component={TransitEdit} />
            <Route path='/transit/add' component={TransitAdd} />
            <Route path='/transit/:id' component={TransitDetail} />

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
