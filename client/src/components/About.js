import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{marginTop: '25px'}}>
              <Card.Header as="h5">About Le Tour de Nichols</Card.Header>
              <Card.Body>
                <Card.Text>
                  This project is a demonstration of a fullstack application. The
                  code can be found <a href="https://github.com/onionpeel/nichols-canyon">here</a>.
                </Card.Text>
                <br />
                <br />
                <Card.Text>
                  {new Date().getFullYear()} Le Tour de Nichols&#8482;
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
