import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';

const Header = ({isAuthenticated, user, logout}) => {
  const logOut = (
      <Nav.Link onClick={logout} href="/">Logout</Nav.Link>
    );

  const logIn = (
      <Nav.Link href="/login">Login</Nav.Link>
    );

  return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Le Tour de Nichols</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated ?
                <Navbar.Text>
                  Welcome {user.name}
                </Navbar.Text>
              : ''
            }
            {isAuthenticated ? <Nav.Link href="/mydashboard">My Dashboard</Nav.Link>
              : ''
            }
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {isAuthenticated ? logOut : logIn}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
