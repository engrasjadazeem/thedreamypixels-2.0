import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Page from './components/page';

import './assets/bootstrap/bootstrap.css';
import './assets/bootstrap/bootstrap-reboot.css';
import './assets/bootstrap/bootstrap-grid.css';

import './index.css';
import './assets/css/icomoon.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
