import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routes = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
