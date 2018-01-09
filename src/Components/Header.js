import React from 'react';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Ryan Canfield</h1>
        <Nav />
      </header>
    );
  }
}
