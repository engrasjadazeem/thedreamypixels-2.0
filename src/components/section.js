import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class section extends React.Component {
    render() {
      return (
        <div id={this.props.SectionId} className={this.props.IsDark ? 'initial-padding bg-dark' : 'initial-padding bg-light'}>
        <style type="text/css">
          {`
            .initial-padding {
              padding: 7em 0;
            }

            .r-pb {
                padding-bottom: 40px;
            }
            .row {
                margin-left: -15px;
                margin-right: -15px;
            }

            .section-title {
              font-size: 11px;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #41454f;
              font-family: "Roboto", sans-serif;
              font-weight: 700;
              opacity: 1;
              margin-bottom: 20px;
            }

            .lead {
              margin-bottom: 20px;
              font-size: 26px;
              font-weight: 300;
              line-height: 1.4;
              color: #41454f;
            }

            .bg-dark {
              background: #444853;
              color: #cccccc;
            }

            .bg-light {
              background: #f7f7f7;
              color: #41454f;
            }
          `}
        </style>
          <Container>
            <Row className="row r-pb">
              <Col className={this.props.MoreWidth ? "text-center offset-1 col-md-10 text-center section-heading" : "text-center offset-2 col-md-8 text-center section-heading"}>
                <h2 className={this.props.IsDark ? 'section-title bg-dark' : 'section-title'}>{this.props.Name}</h2>
                <p className={this.props.IsDark ? 'lead bg-dark' : 'lead'}>{this.props.Description}</p>
              </Col>
            </Row>
            <Row className="row">
              <Col>{this.props.Content}</Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default section;
