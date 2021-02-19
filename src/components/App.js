import React from 'react';

import {BrowserRouter, Route, Switch}from 'react-router-dom'

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Layaut from './Layaut';
import NotFound1 from '../pages/NotFound'





function App() {
  return (
    <BrowserRouter>
    <Layaut>
      <Switch>
        <Route exact path="/badges" component={Badges}/>
        <Route exact path="/badge/new" component={BadgeNew}/>
        <Route component={NotFound}/>
      </Switch>
    </Layaut>
    </BrowserRouter>
  );
}

export default App;

