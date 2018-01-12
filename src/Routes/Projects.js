import React from 'react';
import Introduction from '../Components/Introduction';
import Icon from '../Components/Icon';
import Footer from '../Components/Footer';

export default class Projects extends React.Component {
  render() {
    return (
      <main className='page'>
        <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
        <div className='content'>
        <div className='content__split'>
            <div className='content__split__column'>
              <h3 className='h3'>Companies I've worked with</h3>
              <ul className='client__list'>
                <li className='client__item client__item--hasLink'>
                  <a href='http://pat.ocean.com' className='a client__link'>
                    Carnival Cruiselines
                  </a>
                </li>
                <li className='client__item'>eBay Enterprise</li>
                <li className='client__item'>Blue Cross Blue Shield</li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://pat.usmexpat.com' className='a client__link'>
                    Arizona State University
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://researchaz.org' className='a client__link'>
                    University of Arizona
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://researchaz.org' className='a client__link'>
                    Northern Arizona University
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://hotelogical.com' className='a client__link'>
                    Hotelogical
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://hotelsugogo.com' className='a client__link'>
                    Hotels Ugogo
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://trutankless.com' className='a client__link'>
                    TruTankless
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://bodetree.com' className='a client__link'>
                    BodeTree
                  </a>
                </li>
                <li className='client__item client__item--hasLink'>
                  <a href='http://synapsestudios.com' className='a client__link'>
                    Synapse Studios
                  </a>
                </li>
                <li className='client__item'>Puppies.com</li>
                <li className='client__item'>High Above</li>
              </ul>
            </div>
            <div className='content__split__column'>
              <h3 className='h3'>Open Source Projects</h3>
              <ul>
                <li>
                  <h4 className='h4'>Complete React Scripts</h4>
                  <a className='a' href='http://www.github.com/canfie1d/complete-react-scripts'><Icon icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                  <a className='a' href='https://www.npmjs.com/package/complete-react-scripts'><Icon icon='email' size='x-large' /><span className='visually-hidden'>NPM</span></a>
                </li>
                <li>
                  <h4 className='h4'>Shopify React Scripts</h4>
                  <a className='a' href='http://www.github.com/canfie1d/shopify-react-scripts'><Icon icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                  <a className='a' href='https://www.npmjs.com/package/shopify-react-scripts'><Icon icon='email' size='x-large' /><span className='visually-hidden'>NPM</span></a>
                </li>
                <li>
                  <h4 className='h4'>Slack Statusbot</h4>
                  <a className='a' href='https://github.com/canfie1d/statusbot'><Icon icon='github' size='x-large' /><span className='visually-hidden'>Github</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
