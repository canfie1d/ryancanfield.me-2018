import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import ContactCard from '../Components/ContactCard';

export default class Contact extends React.Component {
  render() {
    return (
      <main className='page fade'>
        <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>I'd love to hear from you</h3>
          <ContactCard />
        </div>
        <Footer />
      </main>
    );
  }
}
