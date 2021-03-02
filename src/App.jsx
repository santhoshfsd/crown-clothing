import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'

const hats = () => {
  return <div>Hats page</div>
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/hats" component={hats}></Route>

    </div>
  );
}

export default App;
