import React from 'react';
import Icon from '../Components/Icon';

export default class OpenSourceItem extends React.Component {
  renderNpmLink() {
    if (this.props.npmUrl) {
      return (
        <a className='a' href={this.props.npmUrl}>
          <Icon color='primary' icon='npm' size='x-large' />
          <span className='visually-hidden'>{`View ${this.props.title} on NPM`}</span>
        </a>
      );
    }
  }

  render() {
    return (
      <li className='open-source__item'>
        <div className='open-source__header'>
          <h4 className='h4'>{this.props.title}</h4>
        </div>
        <a className='a' href={this.props.githubUrl}>
          <Icon color='primary' icon='github' size='x-large' />
          <span className='visually-hidden'>{`View ${this.props.title} on Github`}</span>
        </a>
        {this.renderNpmLink()}
      </li>
    );
  }
}
