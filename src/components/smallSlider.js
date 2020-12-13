import React from 'react';
import { Carousel } from 'react-bootstrap';

class smallSlider extends React.Component {
  constructor(props) {
      super(props);
  }

  closeAlbum() {
    this.props.closeAlbum();
  }

  render() {
    return (
      <div>
      <style type="text/css">
        {`
          .show-no-border {
            border: none;
          }

          .place-at-bottom {
            bottom: 0%;
          }

          .place-at-center {
            bottom: 40%;
          }

          .limitHeight {
            height: 500px;
            overflow: hidden;
          }

          .text-align {
            margin-bottom: 15%;
          }

          .author-name {
            display: block;
            padding-top: 20px;
            font-size: 16px;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            color: rgba(255, 255, 255, 0.7);
          }

          .overlay {
            position: absolute;
            z-index: 3;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: .5;
            background: #444853;
          }

          .portrait-in-frame {
            height: 60vh;
            width: 100%;
            overflow: hidden;
            object-fit: contain;
            zoom: 1.4;
          }

          #btn-close {
            text-align: center;
            font-size: 10px;
            cursor: pointer;
            text-align: center;
            display: block;
          	width: 50%;
          	margin: 0 auto;
          }
        `}
      </style>
        <Carousel className={this.props.cssClass}>
          {
            this.props.reviews &&
            this.props.reviews.map((review, index) =>
              <Carousel.Item key={index}>
                <img
                  className="d-block justify-image"
                  src={review.backgroundImageUrl}
                  alt={review.altTag}
                />
                <div className="overlay"></div>
                <Carousel.Caption className="show-no-border place-at-center">
                  <p className="text-align">
                    {review.text}
                    <span className="author-name">— {review.author} on {review.date}</span>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }

          {
            this.props.photos &&
            this.props.photos.map((photo, index) =>
              <Carousel.Item key={index}>
                <a id="btn-close"
                  onClick={() => this.closeAlbum()}>
                    Close
                </a>
                <img
                  className="d-block portrait-in-frame"
                  src={photo.imageUrl}
                  alt={photo.altTag}
                />
                <Carousel.Caption className="show-no-border place-at-bottom">
                  <p>
                    {photo.text}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }
        </Carousel>
      </div>
    );
  }
}

export default smallSlider;
