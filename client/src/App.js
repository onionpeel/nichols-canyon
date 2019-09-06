import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import MyDashboard from './components/MyDashboard';
import RouteGuide from './components/RouteGuide';
import Subtropics from './components/Subtropics';
import HighCountry from './components/HighCountry';
import Summit from './components/Summit';
import CommunityBoard from './components/CommunityBoard';

import {loadUser} from './actions/authActions';

const App = ({isAuthenticated, loadUser}) => {
  useEffect(() => {
    loadUser();
  });

  const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/mydashboard" isAuthenticated={isAuthenticated} component={MyDashboard} />
        <PrivateRoute path='/routeguide' isAuthenticated={isAuthenticated} component={RouteGuide} />
        <PrivateRoute path="/subtropics" isAuthenticated={isAuthenticated} component={Subtropics} />
        <PrivateRoute path="/highcountry" isAuthenticated={isAuthenticated} component={HighCountry} />
        <PrivateRoute path="/summit" isAuthenticated={isAuthenticated} component={Summit} />
        <PrivateRoute path="/communityboard" isAuthenticated={isAuthenticated} component={CommunityBoard} />
      </Switch>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
