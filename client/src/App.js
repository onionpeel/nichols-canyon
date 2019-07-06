import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import MyDashboard from './components/MyDashboard';
import RouteGuide from './components/RouteGuide';
import Subtropics from './components/Subtropics';
import HighCountry from './components/HighCountry';
import Summit from './components/Summit';
import CommunityBoard from './components/CommunityBoard';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/mydashboard" component={MyDashboard} />
          <Route path='/routeguide' component={RouteGuide} />
          <Route path="/subtropics" component={Subtropics} />
          <Route path="/highcountry" component={HighCountry} />
          <Route path="/summit" component={Summit} />
          <Route path="/communityboard" component={CommunityBoard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
