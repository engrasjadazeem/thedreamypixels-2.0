import React from 'react';
import { Carousel } from 'react-bootstrap';

class smallSlider extends React.Component {
  render() {
    return (
      <div>
      <style type="text/css">
        {`
          .show-no-border {
            border: none;
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
        `}
      </style>
        <Carousel className="limitHeight">
          {
            this.props.reviews.map((review, index) =>
              <Carousel.Item>
                <img
                  className="d-block justify-image"
                  src={review.backgroundImageUrl}
                  alt={review.altTag}
                />
                <div class="overlay"></div>
                <Carousel.Caption className="show-no-border">
                  <p className="text-align">
                    {review.text}
                    <span className="author-name">— {review.author} on {review.date}</span>
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
