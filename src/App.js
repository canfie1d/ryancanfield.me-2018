import React from 'react';
import Header from './Components/Header';
import { ScrollToTop } from './Services/ScrollToTop';
import Routes from './Routes';
import './App.styl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='l'>
          <ScrollToTop />
          <div className='l--rightColumn'>
            <a className='visually-hidden' href="#content">Skip to content</a>
            <Header />
          </div>
          <div className='l--leftColumn'>
            <Routes {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
