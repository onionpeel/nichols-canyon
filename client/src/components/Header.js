import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Le Tour de Nichols</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/mydashboard">My Dashboard</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
      </Navbar>
  );
};

export default Header;
