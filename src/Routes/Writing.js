import React from 'react';
import Card from '../Components/Card';
import Introduction from '../Containers/Introduction';
import Footer from '../Components/Footer';
import { CARD_LINKS } from '../Services/Data';

export default class Writing extends React.Component {
  renderCardLinks() {
    let links = [];

    for (let i = 0; i < CARD_LINKS.length; i++) {

      links.push(
        <Card
          key={i}
          title={CARD_LINKS[i].title}
          description={CARD_LINKS[i].description}
          imageUrl={CARD_LINKS[i].imageUrl}
          url={CARD_LINKS[i].url}
          length={CARD_LINKS[i].length}
        />
      );
    };

    return <ul className='card__list'>{links}</ul>;
  }

  render() {
    return (
      <main className='page fade'>
        <Introduction title="My Writing." subtitle="Organized thoughts on front-end design &amp; development." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>Selected Medium Articles</h3>
          {this.renderCardLinks()}
        </div>
        <Footer />
      </main>
    );
  }
}
