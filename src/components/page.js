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
      albums: [
          {
            name : 'Uwera & Jonas',
            thumbnailUrl : 'https://i.ibb.co/PG2mNRn/Uwera-And-Jonas.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
          {
            name : 'Victoria & Stepan',
            thumbnailUrl : 'https://i.ibb.co/5x6Y1Br/Victoria-And-Stepan.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
          {
            name : 'Lina & Wang',
            thumbnailUrl : 'https://i.ibb.co/7r8zs5k/Li-Na-And-Wang.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
          {
            name : 'Dina & Sammak',
            thumbnailUrl : 'https://i.ibb.co/gJ7SD0Z/Dina-And-Sammak.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
          {
            name : 'Sofia & Kids',
            thumbnailUrl : 'https://i.ibb.co/7XCwRv2/Sofia-And-Kids.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
          {
            name : 'Minha Photoshoot',
            thumbnailUrl : 'https://i.ibb.co/PYwCCfm/Minha-Photoshoot.jpg',
            imageAlt: '',
            linkUrl: '#',
            numberOfPhotos: 5
          },
        ],
      imageUrl: 'https://i.ibb.co/PG2mNRn/Uwera-And-Jonas.jpg'
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
            {this.state.albums.map((album, index) =>
              <Post key= {index}
                title = {album.name}
                imageUrl = {album.thumbnailUrl}
                imageAlt = {album.imageAlt}
                linkUrl = {album.linkUrl}
                numberOfPhotos = {album.numberOfPhotos} />
            )}
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
  							<span className="meta small-caps">Photographer, Cinematographer</span>
  							<p className="txt-ash-grey">I have always been interested in capturing emotions, may it be in any form. Weddings bring more joy to me personally because everyone is so happy! I enjoy landscape and street photography as well.</p>
              </div>
            </div>
          )}
          />

        <Section Name="Contact"
          SectionId="contact"
          Description="Let's talk about your story now"
          Content={(
            <div className="text-center">
              <p className="animate-box fadeInUp animated">Every story is unique in its own way. What makes your story significant than others?</p>
              <p className="animate-box fadeInUp animated"><a href="https://www.facebook.com/thedreamypixels/" target="_blank" className="btn btn-primary btn-lg">Let's talk?</a></p>
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
