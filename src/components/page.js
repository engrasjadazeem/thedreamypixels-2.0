import React from 'react';
import Button from 'react-bootstrap/Button';

import Nav from './navbar';
import ImageSlider from './imageSlider';
import Section from './section';
import Post from './post';

import imageUrl from '../assets/images/thumbnails/UweraAndJonas.jpg';

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
          SectionId="portfolio"
          Description="Helping you to capture your precious moments and making memories out of it."
          Content={
            <div className="row">
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />
              <Post title="Uwera & Jonas"
                imageUrl={imageUrl}
                imageAlt="Wedding photo"
                linkUrl="#"
                numberOfPhotos="5" />

            </div>
          }
          />

        <Section Name="About"
          SectionId="about"
          Description="Hi, we are Asjad and Aroob! A husband and wife photographer couple. We truly believe in the union of two hearts. Marriage and love, capturing the magical moments between two lovers. Working with different people and cultures makes us happy. Our moto is to build a friendly relationship so that we can enjoy your lucky day together."
          IsDark
          Content={(
            <p>Content</p>
          )}
          />

        <Section Name="Contact"
          SectionId="contact"
          Description="Let's talk about your story now"
          Content={(
            <p>Content</p>
          )}
          />

        <Section Name="Reviews"
          SectionId="reviews"
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
