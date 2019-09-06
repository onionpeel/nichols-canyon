import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import Footer from './Footer';

const Subtropics = () => {

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/canyonEntrance.jpg" />
              <Card.Body>
                <Card.Title>Enter the canyon!</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/lowerCanyon.jpg" />
              <Card.Body>
                <Card.Title>Unlike Disney, there are no lines</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/house.jpg" />
              <Card.Body>
                <Card.Title>Check on the status of your new house</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/waterfall.jpg" />
              <Card.Body>
                <Card.Title>
                Few ever witness the best waterfall in southern California
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/subtropic.jpg" />
              <Card.Body>
                <Card.Title>
                Thanks to wasteful watering practices of local homeowners, you
                get to enjoy a subtropical ecosystem in the desert!
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/construction.jpg" />
              <Card.Body>
                <Card.Title>
                If you are lucky, you might catch a glimpse of a an underpaid
                species that keeps everything looking splendid.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/spelunking.jpg" />
              <Card.Body>
                <Card.Title>Be sure to leave time for a spelunking break.</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/deer.jpg" />
              <Card.Body>
                <Card.Title>Vanity mirrors are available for the wildlife</Card.Title>
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

export default Subtropics;
