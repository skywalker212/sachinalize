import './index.scss';
import './assets/img/favicon.png';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './components/main/main.jsx';
import Home from './views/home/home.jsx';
import Analytics from './views/analytics/analytics.jsx';

const App = () => {
  return (
    <div>
      <Main views={
        [{path: '/', component: Home},{path:'/analytics', component: Analytics}]
      }/>
    </div>
  );
};

render(
  <Router><App/></Router>,
  document.getElementById('app')
);
