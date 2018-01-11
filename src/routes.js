import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import About from './Containers/About';
import Concepts from './Routes/Concepts';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import NotFound from './Routes/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path='/concepts' component={Concepts} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contact' component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
