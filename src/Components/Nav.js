import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact >
              <Icon icon='about' color='white' size='x-large' />
              <span className='visually-hidden'>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to='/concepts' exact>
              <Icon icon='concepts' color='white' size='x-large' />
              <span className='visually-hidden'>Concepts</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to='/contact' exact>
              <Icon icon='elsewhere' color='white' size='x-large' />
              <span className='visually-hidden'>Elsewhere</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
