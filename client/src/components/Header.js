import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {

  return (
      <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">Le Tour de Nichols</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
      </Navbar>
  );
};

export default Header;
