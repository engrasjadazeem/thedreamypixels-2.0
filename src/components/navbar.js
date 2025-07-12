import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class nav extends React.Component {
  constructor(props) {
    super(props);
  }

  changeLanguage = (language) => {
    debugger;
    this.props.changeLanguage(language);
  }

  render() {
    return (
      <div id="home">
      <style type="text/css">
        {`
          .navbar-brand {
            font-family: "Roboto Slab", sans-serif;
          }

          .navbar-light .navbar-nav .nav-link {
            padding: 0px 20px;
            border-bottom: 3px solid transparent;
            transition: 0.3s;
            font-family: "Roboto Slab", sans-serif;
          }

          .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
            border-bottom: 3px solid #7DA7D9;
            opacity: 1;
            font-family: "Roboto Slab", sans-serif;
          }
        `}
      </style>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="#home">The Dreamy Pixels</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {
                  this.props.menuItems.map((menuItem, index) =>
                    <Nav.Link
                      key={index}
                      href={menuItem.link}>
                      {this.props.language === 'en' ? menuItem.label : '' }
                      {this.props.language === 'sv' ? menuItem.label_sv : '' }
                    </Nav.Link>
                  )
                }
                <NavDropdown title={this.props.language === 'en' ? 'Language' : 'Språk'} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => this.changeLanguage('en')}>English</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.changeLanguage('sv')}>Swedish</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default nav;
