import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Motorcycle Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" />
          <Navbar.Collapse id="navbarResponsive">
                <Nav.Link href="/motorcycles">Motorcycles for sale</Nav.Link>
              <Nav.Item>
                <Nav.Link href="/motorcycle">Sell my motorcycle</Nav.Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default CustomNavbar;