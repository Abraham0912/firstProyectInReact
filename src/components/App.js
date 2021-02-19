import React from 'react';

import {BrowserRouter, Route, Switch}from 'react-router-dom'

import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Layaut from './Layaut'





function App() {
  return (
    <BrowserRouter>
    <Layaut>
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badge/new" component={BadgeNew}/>
      </Switch>
    </Layaut>
    </BrowserRouter>
  );
}

export default App;

