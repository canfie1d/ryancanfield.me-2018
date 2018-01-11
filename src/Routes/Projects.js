import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';

export default class Projects extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="My Work." subtitle="A collection of projects, demos &amp; clients." />
        <div className='content'>
          
        </div>
        <Footer />
      </main>
    );
  }
}
