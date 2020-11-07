import React from 'react';
import Button from 'react-bootstrap/Button';

import Nav from './navbar';
import ImageSlider from './imageSlider';
import Section from './section';
import Post from './post';
import SmallSlider from './smallSlider';
import Footer from './footer';

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
          Description="We truly believe in the union of two hearts. Marriage and love, capturing the magical moments between two lovers. Working with different people and cultures makes us happy. Our moto is to build a friendly relationship so that everyone enjoy your lucky day."
          IsDark
          MoreWidth
          Content={(
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <img src={imageUrl}
                  className="portrait-photo"
                  alt="Photographers photo" />
              </div>
              <div className="col-md-6 col-xs-12">
                <h2 className="txt-white">Asjad Azeem</h2>
  							<span class="meta small-caps">Photographer, Cinematographer</span>
  							<p class="txt-ash-grey">I have always been interested in capturing emotions, may it be in any form. Weddings bring more joy to me personally because everyone is so happy! I enjoy landscape and street photography as well.</p>
              </div>
            </div>
          )}
          />

        <Section Name="Contact"
          SectionId="contact"
          Description="Let's talk about your story now"
          Content={(
            <div className="text-center">
              <p class="animate-box fadeInUp animated">Every story is unique in its own way. What makes your story significant than others?</p>
              <p class="animate-box fadeInUp animated"><a href="https://www.facebook.com/thedreamypixels/" target="_blank" class="btn btn-primary btn-lg">Let's talk?</a></p>
            </div>
          )}
          />

        <SmallSlider />

        <Footer />
      </div>
    );
  }
}

export default Page;
