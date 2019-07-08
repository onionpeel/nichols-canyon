import React from 'react';
import {ListGroup, Card, Container, Row, Col} from 'react-bootstrap';
import RouteGuide from './RouteGuide';
import Footer from './Footer';

const MyDashboard = () => {

  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card style={{marginTop: '25px'}}>
                <Card.Img variant="top" src="/assets/canyonSign.jpg" />

                <Card.Body>
                  <Card.Title>It's time to slide into your virtual spandex!</Card.Title>
                  <Card.Text>
                    Let your fingertips do the peddling.
                  </Card.Text>
                </Card.Body>

                <ListGroup>
                  <ListGroup.Item action href="/routeguide" variant="light">
                    The Route
                  </ListGroup.Item>
                  <ListGroup.Item action href="/subtropics" variant="light">
                    Subtropics
                  </ListGroup.Item>
                  <ListGroup.Item action href="/highcountry" variant="light">
                    High Country
                  </ListGroup.Item>
                  <ListGroup.Item action href="/summit" variant="light">
                    Summit
                  </ListGroup.Item>
                  <ListGroup.Item action href="/communityboard" variant="light">
                    Community Board
                  </ListGroup.Item>
                </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    <Footer />
  </div>

  );
};

export default MyDashboard;
