import React from 'react';

import {BrowserRouter, Route}from 'react-router-dom'

import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'





function App() {
  return (
    <BrowserRouter>
    <Route path="/badges" component={Badges}/>
    <Route path="/badge/new" component={Badges}/>
    </BrowserRouter>
  );
}

export default App;

