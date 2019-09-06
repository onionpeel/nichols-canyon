import React from 'react';
import {Container, Card, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Footer from './Footer';

const RouteGuide = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{marginTop: "25px"}}>
              <div>
                <Card.Title style={{marginTop: "15px", textAlign: "center"}}>LA's path of cycling enlightenment</Card.Title>
              </div>
              <Card.Img variant="top" src="/assets/nicholsMap.png" />
              <Card.Body>
                <Card.Text>
                  With 820 feet of vertical climb, you will soon understand why this
                  is regarded as the real Grand Canyon.
                </Card.Text>
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

export default connect(null, null)(RouteGuide);
