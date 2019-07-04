import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {

  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Le Tour de Nichols</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
      </Navbar>
  );
};

export default Header;
