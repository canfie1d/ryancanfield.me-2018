import React from 'react';
import Introduction from '../Components/Introduction';
import Icon from '../Components/Icon';
import Footer from '../Components/Footer';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';
import { CLIENTS, PROJECTS } from '../Services/Data';

export default class Projects extends React.Component {

  renderProjectList() {
    const projectList = [];

    for (let i = 0; i < PROJECTS.length; i++) {
      projectList.push(
        <li key={PROJECTS[i].title}>
          <a className='a' href={`http://www.codepen.io/canfie1d/full/${PROJECTS[i].id}`}>{PROJECTS[i].title}</a>
        </li>
      );
    }

    return <ul>{projectList}</ul>;
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

    return <ul className='client__list'>{clientList}</ul>;
  }

  render() {
    return (
      <main className='page'>
        <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
        <div className='content'>
          <div className='content__split'>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3'>Companies I've worked with</h3>
              {this.renderClientList()}
            </AnimatedWaypoint>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3'>Open Source Projects</h3>
              <ul>
                <li>
                  <h4 className='h4'>Complete React Scripts</h4>
                  <a className='a' href='http://www.github.com/canfie1d/complete-react-scripts'><Icon color='primary' icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                  <a className='a' href='https://www.npmjs.com/package/complete-react-scripts'><Icon color='primary' icon='email' size='x-large' /><span className='visually-hidden'>NPM</span></a>
                </li>
                <li>
                  <h4 className='h4'>Shopify React Scripts</h4>
                  <a className='a' href='http://www.github.com/canfie1d/shopify-react-scripts'><Icon color='primary' icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                  <a className='a' href='https://www.npmjs.com/package/shopify-react-scripts'><Icon color='primary' icon='email' size='x-large' /><span className='visually-hidden'>NPM</span></a>
                </li>
                <li>
                  <h4 className='h4'>Slack Statusbot</h4>
                  <a className='a' href='https://github.com/canfie1d/statusbot'><Icon color='primary' icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                </li>
              </ul>
            </AnimatedWaypoint>
            <AnimatedWaypoint className='content__split__column content__split__column--full'>
              <div className='hr' />
              <h3 className='h3'>Code Snippets &amp; Demos</h3>
              {this.renderProjectList()}
            </AnimatedWaypoint>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
