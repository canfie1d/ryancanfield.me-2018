import React from 'react';
import Icon from '../Components/Icon';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';

export default class Landing extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
        <div className='content'>
          <div className='contact-card'>
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
        </div>
        <Footer />
      </main>
    );
  }
}
