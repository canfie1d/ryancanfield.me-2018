import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import ContactCard from '../Components/ContactCard';

export default class Landing extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
        <div className='content'>
          <ContactCard />
        </div>
        <Footer />
      </main>
    );
  }
}
