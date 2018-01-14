import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import About from './Routes/About';
import Writing from './Routes/Writing';
import Contact from './Routes/Contact';
import Work from './Routes/Work';
import NotFound from './Routes/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path='/writing' component={Writing} />
    <Route exact path='/work' component={Work} />
    <Route exact path='/contact' component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
