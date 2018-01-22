import React from 'react';

export default class Codepen extends React.Component {
  render() {
    const src = `//codepen.io/${this.props.user}/embed/${this.props.hash}/?height=${this.props.height}&theme-id=${this.props.theme || 0}&default-tab=${'result'}`;

    return (
      <iframe
        src={src}
        title={this.props.title || ''}
        width={this.props.width}
        height={this.props.height}
        scrolling="no"
        frameBorder="no"
        style={{ height: this.props.height, width: this.props.width }}
      />
    );
  }
};
