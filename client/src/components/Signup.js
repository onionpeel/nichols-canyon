import React from 'react';
import {Form, Container, Navbar, Row, Col, Button} from 'react-bootstrap';

const Signup = () => {

  return (
    <div style={{marginTop: "25px"}}>
      <div style={{color: "red"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h4>
                Because this is only a developmental project, do not use a real
                email account.  Make up a fake email address.  Be sure to remember
                your fake address so you can login later.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{marginTop: "25px"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="**USE A FAKE EMAIL**" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{marginTop: "25px"}}>
        <Container fluid>
          <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand>2019 Le Tour de Nichols&#8482;</Navbar.Brand>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
