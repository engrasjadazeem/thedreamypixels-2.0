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
        `}
      </style>
        <Carousel className="limitHeight">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_174cbd652a9%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_174cbd652a9%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="First slide"
            />
            <Carousel.Caption className="show-no-border">
              <p className="text-align">
                “One of the best decisions we could have made during the entire wedding planning process was booking @theDreamyPixels. Not only did our pictures turn out beautifully - but he was incredibly easy to work with from beginning to end and fantastic...”
                <span className="author-name">— Uwera Musekura Lundsholm</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default smallSlider;
