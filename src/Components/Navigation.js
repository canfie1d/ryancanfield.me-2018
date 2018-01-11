import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink className='nav__link' activeClassName="nav__link--active" to='/' exact>
              <Icon className='nav__link__icon' icon='about' color='white' size='large' />
              <span className='visually-hidden'>About</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' activeClassName="nav__link--active" to='/concepts' exact>
              <Icon className='nav__link__icon' icon='concepts' color='white' size='large' />
              <span className='visually-hidden'>Concepts</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' activeClassName="nav__link--active" to='/projects' exact>
              <Icon className='nav__link__icon' icon='projects' color='white' size='large' />
              <span className='visually-hidden'>Work</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink className='nav__link' activeClassName="nav__link--active" to='/contact' exact>
              <Icon className='nav__link__icon' icon='contact' color='white' size='large' />
              <span className='visually-hidden'>Elsewhere</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
