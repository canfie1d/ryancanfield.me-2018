import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import OpenSourceItem from '../Components/OpenSourceItem';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';
import Icon from '../Components/Icon';
import { CLIENTS, DEMOS } from '../Services/Data';

export default class Work extends React.Component {

  renderDemoList() {
    const demoList = [];

    for (let i = 0; i < DEMOS.length; i++) {
      demoList.push(
        <AnimatedWaypoint element='li' className='demo__item' key={DEMOS[i].title}>
          <a className='a demo__link' href={`http://www.codepen.io/canfie1d/full/${DEMOS[i].id}`}>
            <div className='demo__link__column'>
              <div className='demo__image__wrapper'>
                <img className='demo__image' src={DEMOS[i].image} alt='' />
              </div>
            </div>
            <div className='demo__link__column'>
              <h3 className='h3 demo__title'>{DEMOS[i].title}</h3>
              <div className='demo__heart-container'>
                <Icon icon='heart' size='small' color='secondary' />
                <span className='demo__heart__quantity'>{DEMOS[i].hearts}</span>
              </div>
            </div>
          </a>
        </AnimatedWaypoint>
      );
    }

    return <ul className='demo__list'>{demoList}</ul>;
  }

  renderClientList() {
    const clientList = [];

    for (let i = 0; i < CLIENTS.length; i++) {
      if (CLIENTS[i].url) {
        clientList.push(
          <li key={CLIENTS[i].title} className='client__item client__item--hasLink'>
            <a href={CLIENTS[i].url} className='a client__link'>{CLIENTS[i].title}</a>
          </li>
        );
      } else {
        clientList.push(
          <li key={CLIENTS[i].title} className='client__item'>
            {CLIENTS[i].title}
          </li>
        );
      }
    }

    return (
      <ul className='client__list'>{clientList}</ul>
    );
  }

  renderOpenSourceList() {
    return (
      <ul className='open-source__list'>
        <OpenSourceItem
          title='Complete React Scripts'
          githubUrl='http://www.github.com/canfie1d/complete-react-scripts'
          npmUrl='https://www.npmjs.com/package/complete-react-scripts'
        />
        <OpenSourceItem
          title='Shopify React Scripts'
          githubUrl='http://www.github.com/canfie1d/shopify-react-scripts'
          npmUrl='https://www.npmjs.com/package/shopify-react-scripts'
        />
        <OpenSourceItem
          title='Slack Statusbot'
          githubUrl='https://github.com/canfie1d/statusbot'
        />
      </ul>
    );
  }

  render() {
    return (
      <main className='page'>
        <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>Interface Demos</h3>
          {this.renderDemoList()}
          <div className='content__split'>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3 client__list__header'>Companies I've worked with</h3>
              {this.renderClientList()}
            </AnimatedWaypoint>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3'>Open source projects</h3>
              {this.renderOpenSourceList()}
            </AnimatedWaypoint>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
