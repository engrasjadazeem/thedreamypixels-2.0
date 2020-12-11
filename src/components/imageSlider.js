import React from 'react';
import { Carousel } from 'react-bootstrap';

class imageSlider extends React.Component {
  render() {
    return (
      <div className="navbar-hack">
      <style type="text/css">
        {`
          .carousel-caption {
            bottom: 40%;
            font-family: "Roboto Slab", sans-serif;
            border: 7px solid #fff;
            padding: 30px 50px;
          }

          .carousel-caption > h1 {
            font-size: 50px;
          }

          .navbar-hack {
            top: 60px;
          }

          .overlay {
            position: absolute;
            z-index: 3;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: .3;
            background: #444853;
          }

          .justify-image {
            height: 100vh;
            width: 100%;
            overflow: hidden;
            object-fit: cover;
          }
        `}
      </style>
        <Carousel>
          {
            this.props.images.map((image, index) =>
              <Carousel.Item key={index} >
                <img
                  className="d-block justify-image"
                  src={image.imageUrl}
                  alt={image.altTag}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h1>{this.props.language == 'en' ? image.title : image.title_sv}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }
        </Carousel>
      </div>
    );
  }
}

export default imageSlider;
