import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const Footer = () => {

  return (
    <div style={{marginTop: "25px"}}>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light" fixed="sticky">
        <Navbar.Brand>2019 Le Tour de Nichols&#8482;</Navbar.Brand>
        </Navbar>
      </Container>
    </div>

  );
};

export default Footer;
