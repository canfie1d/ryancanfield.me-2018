import React from 'react';
import Waypoint from 'react-waypoint';

export default class AnimatedWaypoint extends React.Component {
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

  renderElement() {
    const classes = [
      'waypoint',
      this.state.inView ? 'waypoint--inView' : null,
      this.props.className ? this.props.className : null
    ].join(' ').trim();

    if (this.props.element) {
      return (
        <this.props.element className={classes}>
          {this.props.children}
        </this.props.element>
      );
    }

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <Waypoint onEnter={this.handleWaypointEnter}>
        {this.renderElement()}
      </Waypoint>
    );
  }
};
