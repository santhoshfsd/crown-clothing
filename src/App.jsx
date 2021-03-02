import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop-page/shoppage.component'

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>

    </div>
  );
}

export default App;
