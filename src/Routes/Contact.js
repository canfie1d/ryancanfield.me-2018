import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';

export default class Landing extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
        <div className='content'>
          <a href="mailto:ryancanfield@me.com?subject=Hello from ryancanfield.me" >Email</a>
          <a href="http://www.twitter.com/canfie1d">Twitter</a>
          <a href="http://www.github.com/canfie1d">Github</a>
          <a href="http://www.linkedin.com/in/ryanmcanfield">LinkedIn</a>
        </div>
        <Footer />
      </main>
    );
  }
}
