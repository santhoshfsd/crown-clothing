import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop-page/shoppage.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-in-sign-up.component';
import Header from './component/header/header.component';
import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {
        const userRef = await createUserProfile(user);
        console.log(userRef)
        userRef.onSnapshot(snap => {
          console.log(snap.data());
        })
      } else {
        console.log("Not signed in");
      }
      this.setState({ currentUser: user });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;