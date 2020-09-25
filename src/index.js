import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick() {
    alert('hey');
  }

  render() {
    return (
      <div>
        <h1>Page</h1>
        <Post title="Title 1" link="#" description="abcd" handleMyClick={() => this.handleClick()} />
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
