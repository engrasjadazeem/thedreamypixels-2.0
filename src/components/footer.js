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
              <p className="lead animate-box fadeInUp animated">{this.props.contactData.address}</p>
              <p className="animate-box fadeInUp animated"><a rel="noopener noreferrer" href={'mailto:' + this.props.contactData.email} target="_blank">{this.props.contactData.email}</a></p>
              <p className="animate-box fadeInUp animated"><a rel="noopener noreferrer" href={'tel:' + this.props.contactData.phone}>{this.props.contactData.phone}</a></p>
            </div>
            <div className="col-md-8">
              <iframe src={this.props.contactData.mapSrc}
                      width="100%"
                      height="350"
                      frameBorder="0" />
            </div>
          </div>
          <div className="row additional-margin">
            <div className="col-md-4">
              <div className="footer-widget">
                <p>© <a href="https://www.facebook.com/pg/thedreamypixels" target="_blank">The Dreamy Pixels</a>.</p>
                <p className="reduce-txt-size">All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-widget">
                <ul className="social pull-right">
                  <li>
                    <a href={this.props.contactData.facebookLink} target="_blank"><i className="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href={this.props.contactData.instagramLink} target="_blank"><i className="icon-instagram"></i></a>
                  </li>
                  <li>
                    <a href={this.props.contactData.emailLink} target="_blank"><i className="icon-google"></i></a>
                  </li>
                </ul>
                <div className="footer-widget">
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
