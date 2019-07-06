import React from 'react';
import {Container, Card, Row} from 'react-bootstrap';

const RouteGuide = () => {

  return (
    <div>
      <div style={{margin: "auto", width: "60%"}}>
        <Container>
          <Row>
            <Card style={{marginTop: "25px"}}>
              <Card.Title>LA's path of cycling enlightenment</Card.Title>
              <Card.Img variant="top" src="/assets/nicholsMap.png" />
              <Card.Body>
                <Card.Text>
                  With 820 feet of vertical climb, you will soon understand why this
                  is regarded as the real Grand Canyon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Card style={{marginTop: "25px"}}>
              <Card.Title>LA's path of cycling enlightenment</Card.Title>
              <Card.Img variant="top" src="/assets/nicholsStar.jpg" />
              <Card.Body>
                <Card.Text>
                  With 820 feet of vertical climb, you will soon understand why this
                  is regarded as the real Grand Canyon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RouteGuide;
