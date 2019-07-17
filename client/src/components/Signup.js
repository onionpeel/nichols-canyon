import React, {useState} from 'react';
import {Form, Container, Navbar, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../actions/authActions';

const Signup = ({isAuthenticated, register}) => {
  const [profile, setProfile] = useState({
      name: '',
      email: '',
      password: ''
  });

  const {name, email, password} = profile;

  const handleOnChange = e => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    register({
      name: profile.name,
      email: profile.email,
      password: profile.password
    });
  };

  if(isAuthenticated) {
    return <Redirect to='/mydashboard'/>
  };

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
              <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="**USE A FAKE EMAIL**"
                    value={email}
                    name="email"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
