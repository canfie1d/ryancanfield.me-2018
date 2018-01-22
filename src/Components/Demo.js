import React from 'react';
import Codepen from './Codepen';

export default class Demo extends React.Component {
  render() {
    return (
      <div className='overlay' onClick={this.props.closeDemoModal}>
        <div className='modal'>
          <button className='modal__button' onClick={this.props.closeDemoModal}>&times;</button>
          <Codepen user='canfie1d' hash={this.props.demoModal.id} />
          {/*<p data-height="300" data-theme-id="dark" data-slug-hash={this.props.demoModal.id} data-user="canfie1d" data-default-tab="result" class='codepen'>See the Pen <a href={`http://codepen.io/canfie1d/pen/${this.props.demoModal.id}`}>{this.props.demoModal.id}</a> by Ryan Canfield (<a href='http://codepen.io/canfie1d'>@canfie1d</a>) on <a href='http://codepen.io'>CodePen</a></p>*/}
          {/*<iframe title={this.props.demoModal.title} className='demo-iframe' src={`https://codepen.io/canfie1d/embed/${this.props.demoModal.id}`} />*/}
          <span className='demo-loading'>Loading</span>
        </div>
      </div>
    );
  }
}
