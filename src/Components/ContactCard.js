import React from 'react';
import Waypoint from 'react-waypoint';
import Icon from '../Components/Icon';

export default class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inView: false
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  handleWaypointEnter() {
    this.setState({
      inView: true
    });
  }

  render() {
    const classes = [
      'contact-card',
      this.state.inView ? 'contact-card--inView' : null
    ].join(' ').trim();

    return (
      <Waypoint onEnter={this.handleWaypointEnter}>
        <div className={classes}>
          <h3 className='h3'>Would you like to work together or simply chat about a project? Don't hesitate to contact me.</h3>
          <ul className='contact-card__list'>
            <li className='contact-card__item contact-card__item__email'>
              <a className='a' href="mailto:ryancanfield@me.com?subject=Hello from ryancanfield.me" >
                <Icon color='white' size='medium' icon='email' />
                Contact Me
              </a>
            </li>
            <li className='contact-card__item'>
              <a className='a' href="http://www.twitter.com/canfie1d">
                <Icon color='primary' size='x-large' icon='twitter'/>
                <span className='visually-hidden'>Twitter</span>
              </a>
            </li>
            <li className='contact-card__item'>
              <a className='a' href="http://www.github.com/canfie1d">
                <Icon color='primary' size='x-large' icon='github'/>
                <span className='visually-hidden'>Github</span>
              </a>
            </li>
            <li className='contact-card__item'>
              <a className='a' href="http://www.linkedin.com/in/ryanmcanfield">
                <Icon color='primary' size='x-large' icon='linkedin'/>
                <span className='visually-hidden'>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </Waypoint>
    );
  }
}
