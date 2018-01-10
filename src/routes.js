import React from 'react';
import { Route, Switch } from 'react-router';

import Header from './Components/Header';

// PAGES
import Home from './Containers/Home';
import Concepts from './Routes/Concepts';
import Contact from './Routes/Contact';
import NotFound from './Components/NotFound';

export default (
  <div className='l'>
    <div className='l--leftColumn'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/concepts' component={Concepts} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <div className='l--rightColumn'>
      <Header />
    </div>
  </div>
);
