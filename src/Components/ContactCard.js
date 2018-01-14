import React from 'react';
import Icon from '../Components/Icon';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

export default class ContactCard extends React.Component {
  render() {
    return (
      <AnimatedWaypoint className='contact-card'>
        <h3 className='h3'>Would you like to work together? Good news! I am currently seeking a full time engagement.</h3>
        <ul className='contact-card__list'>
          <li className='contact-card__item contact-card__item__email'>
            <a className='button' href="mailto:ryancanfield@me.com?subject=Hello from ryancanfield.me" >
              Contact Me
            </a>
          </li>
          <li className='contact-card__item'>
            <a className='a' href="http://www.twitter.com/canfie1d">
              <Icon color='primary' size='x-large' icon='twitter' />
              <span className='visually-hidden'>Twitter</span>
            </a>
          </li>
          <li className='contact-card__item'>
            <a className='a' href="http://www.github.com/canfie1d">
              <Icon color='primary' size='x-large' icon='github' />
              <span className='visually-hidden'>Github</span>
            </a>
          </li>
          <li className='contact-card__item'>
            <a className='a' href="http://www.linkedin.com/in/ryanmcanfield">
              <Icon color='primary' size='x-large' icon='linkedin' />
              <span className='visually-hidden'>LinkedIn</span>
            </a>
          </li>
        </ul>
      </AnimatedWaypoint>
    );
  }
}
