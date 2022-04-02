import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout-page';

import { auth, createUser } from './firebase/firebase';

import { SET_CURRENT_USER } from './redux/actions/userActions';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUser(user);
      this.props.SET_CURRENT_USER(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
      currentUser: state.user.currentUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    SET_CURRENT_USER: user => dispatch(SET_CURRENT_USER(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
