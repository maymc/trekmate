import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import JSX component files
import Header from '../Global/Header/HeaderComponent';
import Home from '../Home/Home/HomeComponent';
import Login from '../Login/Login/LoginComponent';
import Register from '../Login/Register/RegisterComponent';
import ForgotPassword from '../Login/ForgotPassword/ForgotPasswordComponent';
import Account from '../Account/Account/AccountComponent';
import EditAccount from '../Account/EditAccount/EditAccountComponent';
import EditPassword from '../Account/EditPassword/EditPasswordComponent';
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
  // componentDidMount() {
  // console.log("App - this.props:", this.props);
  // this.props.dispatch(getAllUsers());
  // this.props.dispatch(getAllAccommodations());

  // }


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

            {/* Trip Routes */}
            <Route path='/trip/create' component={CreateTrip} />
            <Route path='/trip/edit/:id' component={EditTrip} />
            <Route path='/trip/:id' component={Trip} />

            {/* Accommodation Routes */}
            <Route path='/accommodation' component={Accommodation} />
          </Switch>
        </Router>

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
