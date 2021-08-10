import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuariAutenti } from './Services/auth';

import './index.css';

import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import Equipamentos from './Pages/Equipamentos/equipamentos';

const PermissaoLogado = ({ component : Component }) => (
  <Route
    render = { id =>
      usuariAutenti() && parseJwt().jti !== "0" ?

      <Component {...id} /> :
      <Redirect to = '/login' />
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PermissaoLogado exact path="/" component={Home} />
        <Route path="/equipamentos/:id" component={Equipamentos} />
        <Redirect to = "/" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
