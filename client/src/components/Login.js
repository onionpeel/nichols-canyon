import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const Login = () => {

  return (
    <div style={{marginTop: "25px"}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <div style={{marginTop: "25px", color: "red"}}>
          <Row className="justify-content-center">
            <Col md={6}>
              <h5>
                If you have not already signed up, you can do that <a href="/signup">here</a>.
              </h5>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Login;
