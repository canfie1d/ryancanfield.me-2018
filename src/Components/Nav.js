import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to='/' exact>Home</NavLink></li>
          <li><NavLink activeClassName="active" to='/not-home' exact>Not Home</NavLink></li>
        </ul>
      </nav>
    );
  }
}
