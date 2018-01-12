import React from 'react';
import Waypoint from 'react-waypoint';

export default class Card extends React.Component {
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
      'card__item',
      this.state.inView ? 'card__item--inView' : null
    ].join(' ').trim();

    return (
      <Waypoint onEnter={this.handleWaypointEnter}>
        <li className={classes}>
          <a href={this.props.url} className='card__link'>
            <div className='card__row'>
              <div className='card__column'>
                <img src={this.props.imageUrl} className='card__image' alt='presentational card' role="presentation" />
              </div>
              <div className='card__column'>
                <span className='card__title'>
                  {this.props.title}
                </span>
                <div className='card__description-wrapper'>
                  <p className='card__description'>
                    {this.props.description}
                  </p>
                </div>
                <span className='card__length'>
                  {this.props.length}
                </span>
              </div>
            </div>
          </a>
        </li>
      </Waypoint>
    );
  }
}
