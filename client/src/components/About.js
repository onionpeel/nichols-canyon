import React from 'react';
import {Card, Container, Navbar} from 'react-bootstrap';

const About = () => {
  return (
    <div style={{width: "60%", margin: "auto"}}>
      <Container>
        <Card style={{marginTop: '25px'}}>
          <Card.Header as="h5">About Le Tour de Nichols</Card.Header>
          <Card.Body>
            <Card.Text>
              This project is a demonstration of a fullstack application. The
              code can be found <a href="https://github.com/onionpeel/nichols-canyon">here</a>.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default About;
