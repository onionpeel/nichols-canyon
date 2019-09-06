import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import Footer from './Footer';

const HighCountry = () => {

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/upperCanyon.jpg" />
              <Card.Body>
                <Card.Title>
                  Voted the number one spot to get a sunburn in all of North
                  America.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/upperHighway.jpg" />
              <Card.Body>
                <Card.Title>
                  This is a popular location for mountain lions who are hungry
                  for sweaty prey.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/balloon.jpg" />
              <Card.Body>
                <Card.Title>
                  30 seconds will be deducted from you finishing time for each
                  direct hit with water balloons.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <div style={{marginTop: "25px"}}>
            <Col md={8}>
              <Button variant="link" href="/mydashboard">Go back to My Dashboard</Button>
            </Col>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HighCountry;
