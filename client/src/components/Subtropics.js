import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';

const Subtropics = () => {

  return (
    <div style={{marginTop: "25px"}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/assets/canyonEntrance.jpg" />
              <Card.Body>
                <Card.Title>Enter the canyon!</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/assets/canyonEntrance.jpg" />
              <Card.Body>
                <Card.Title>Enter the canyon!</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/assets/canyonEntrance.jpg" />
              <Card.Body>
                <Card.Title>Enter the canyon!</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subtropics;
