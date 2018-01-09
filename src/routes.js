import React from 'react';
import { Route, Switch } from 'react-router';

import Header from './Components/Header';

// PAGES
import Home from './Containers/Home';
import NotHome from './Routes/NotHome';
import NotFound from './Components/NotFound';

export default (
  <div className='l'>
    <div className='l--leftColumn'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/not-home' component={NotHome} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <div className='l--rightColumn'>
      <Header />
    </div>
  </div>
);
