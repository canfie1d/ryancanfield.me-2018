import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='introduction'>
          <h1>Contact Me.</h1>
          <h2>You can reach to out me in several ways.</h2>
        </div>
        <div className='content'>
          <a href="mailto:ryancanfield@me.com?subject=Hello from ryancanfield.me" >Email</a>
          <a href="http://www.twitter.com/canfie1d">Twitter</a>
          <a href="http://www.github.com/canfie1d">Github</a>
          <a href="http://www.linkedin.com/in/ryanmcanfield">LinkedIn</a>
        </div>
      </div>
    );
  }
}
