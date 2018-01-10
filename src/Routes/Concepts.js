import React from 'react';
import Card from '../Components/Card';
import { CARD_LINKS } from '../Services/Data';

export default class Landing extends React.Component {
  renderCardLinks() {
    let links=[];

    for (let i=0; i < CARD_LINKS.length; i++) {

      links.push(
        <li key={i} className='card__item'>
          <Card
            title={CARD_LINKS[i].title}
            description={CARD_LINKS[i].description}
            imageUrl={CARD_LINKS[i].imageUrl}
            url={CARD_LINKS[i].url}
            length={CARD_LINKS[i].length}
          />
        </li>
      );
    };

    return <ul className='card__list'>{links}</ul>;
  }
  
  render() {
    return (
      <div className='page'>
        <div className='introduction'>
          <h1>My Writing.</h1>
          <h2>Organized thoughts on front-end design &amp; development.</h2>
        </div>
        <div className='content'>
          {this.renderCardLinks()}
        </div>
      </div>
    );
  }
}
