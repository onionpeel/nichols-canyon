import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Container, Row, Col, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {login} from '../actions/authActions';
import {clearError} from '../actions/errorActions';

const Login = ({isAuthenticated, login, errorMessage, clearError}) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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

  const handleClearInput = e => {
    setUser({
        email: '',
        password: ''
    });
    clearError();
  };

  if(isAuthenticated) {
    return <Redirect to='/mydashboard'/>
  };

  return (
    <div style={{marginTop: "25px"}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null}
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
            {errorMessage ?
               <>
                <br />
                <Button variant="secondary" onClick={handleClearInput}> Clear Form </Button>
               </> :
              null
            }
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
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.err.errorMessage
});

const mapDispatchToProps = {
  login,
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
