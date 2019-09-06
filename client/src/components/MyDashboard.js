import React from 'react';
import {ListGroup, Card, Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer';
import {Link} from 'react-router-dom';

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
                  <ListGroup.Item variant="light">
                    <Link to="/routeguide">
                      The Route
                    </Link>
                  </ListGroup.Item>

                  <ListGroup.Item variant="light">
                    <Link to="/subtropics">
                      Subtropics
                    </Link>
                  </ListGroup.Item>

                  <ListGroup.Item variant="light">
                    <Link to="/highcountry">
                      High Country
                    </Link>
                  </ListGroup.Item>

                  <ListGroup.Item variant="light">
                    <Link to="/summit">
                      Summit
                    </Link>
                  </ListGroup.Item>

                  <ListGroup.Item variant="light">
                    <Link to="/communityboard">
                      Community Board
                    </Link>
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

// export default MyDashboard;
