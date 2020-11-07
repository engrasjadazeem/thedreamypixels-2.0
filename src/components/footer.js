import React from 'react';

class footer extends React.Component {
  render () {
    return (
      <div id="footer">
        <div className="container">
          <style type="text/css">
            {`
              #footer {
                background: #ececec;
                padding: 4em 0;
                font-size: 16px;
              }

              #footer p {
                margin-bottom: 10px;
              }

              #footer a {
                color: #448CCB;
              }

              #footer .footer-widget {
                margin-bottom: 30px;
                float: left;
                width: 100%;
              }

              .reduce-txt-size {
                font-size: 10px;
              }

              .social {
                  padding: 0;
                  margin: 0;
              }

              .pull-right {
                  float: right !important;
              }

              .social li {
                  padding: 0;
                  margin: 0;
                  display: inline;
              }

              .social li a {
                  margin-left: 10px;
              }

              .social li a i {
                  font-size: 20px;
              }

              .additional-margin {
                margin-top: 10px;
              }
            `}
          </style>
          <div className="row">
            <div className="col-md-4">
              <p className="lead animate-box fadeInUp animated">Malmö, Sweden</p>
              <p className="animate-box fadeInUp animated"><a rel="noopener noreferrer" href="mailto:thedreamypixels@gmail.com" target="_blank">thedreamypixels@gmail.com</a></p>
              <p className="animate-box fadeInUp animated"><a rel="noopener noreferrer" href="tel:0046734867683">0046-73-486-76-83</a></p>
            </div>
            <div className="col-md-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2253.5515518713914!2d12.997180798966697!3d55.60981802199358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1548544181252"
                      width="100%"
                      height="350"
                      frameborder="0" />
            </div>
          </div>
          <div className="row additional-margin">
            <div className="col-md-4">
              <div class="footer-widget">
                <p>© <a href="https://www.facebook.com/pg/thedreamypixels" target="_blank">The Dreamy Pixels</a>.</p>
                <p class="reduce-txt-size">All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div class="footer-widget">
                <ul class="social pull-right">
                  <li>
                    <a href="https://www.facebook.com/pg/thedreamypixels" target="_blank"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/thedreamypixels" target="_blank"><i class="icon-instagram"></i></a>
                  </li>
                  <li>
                    <a href="mailto:thedreamypixels@gmail.com" target="_blank"><i class="icon-google"></i></a>
                  </li>
                </ul>
                <div class="footer-widget">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
