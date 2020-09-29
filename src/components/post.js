import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <a href={this.props.link}>{this.props.description}</a>
        <button onClick={() => this.props.handleMyClick()}>hello</button>
      </div>
    );
  }
}

export default Post;
