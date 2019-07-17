import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {login} from '../actions/authActions';

const Login = ({isAuthenticated, login}) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    return <Redirect to='/mydashboard'/>
  }, [isAuthenticated]);

  const handleOnChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    login({
      email: user.email,
      password: user.password
    });
  };

  return (
    <div style={{marginTop: "25px"}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleOnChange}
                />
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
