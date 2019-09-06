import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import Footer from './Footer';

const Summit = () => {

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/intersection.jpg" />
              <Card.Body>
                <Card.Title>
                  Four pylon corner.  A national landmark.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/pacman.jpg" />
              <Card.Body>
                <Card.Title>
                  Pacman players are prohibited.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/bulletin.jpg" />
              <Card.Body>
                <Card.Title>
                  Get a look the entirety of Runyon Canyon...from a public
                  bulletin board.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/tourists.jpg" />
              <Card.Body>
                <Card.Title>
                  People flock from all over the world to gawk at you.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/closedGate.jpg" />
              <Card.Body>
                <Card.Title>
                  Don't forget to bring the secret code or you won't be admitted.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/openGate.jpg" />
              <Card.Body>
                <Card.Title>
                  ...or just use the open gate.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/cone.jpg" />
              <Card.Body>
                <Card.Title>
                  The finish has been colorfully decorated in anticipation
                  of your arrival.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} style={{marginTop: "25px"}}>
            <Card>
              <Card.Img variant="top" src="/assets/downtown.jpg" />
              <Card.Body>
                <Card.Title>
                  The view of all views.
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

export default Summit;
