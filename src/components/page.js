import React from 'react';
import Post from './post';
import Button from 'react-bootstrap/Button';

import Nav from './navbar';
import ImageSlider from './imageSlider';
import Section from './section';

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
        <Nav />
        <ImageSlider />

        <Section Name="Portfolio"
          Description="Helping you to capture your precious moments and making memories out of it."
          Content={(
            <p>Content</p>
          )}
          />

        <Section Name="About"
          Description="Hi, we are Asjad and Aroob! A husband and wife photographer couple. We truly believe in the union of two hearts. Marriage and love, capturing the magical moments between two lovers. Working with different people and cultures makes us happy. Our moto is to build a friendly relationship so that we can enjoy your lucky day together."
          IsDark
          Content={(
            <p>Content</p>
          )}
          />

        <Section Name="Contact"
          Description="Let's talk about your story now"
          Content={(
            <p>Content</p>
          )}
          />

        <Section Name="Reviews"
          Description="Reviews"
          Content={(
            <p>Content</p>
          )}
          />
      </div>
    );
  }
}

export default Page;
