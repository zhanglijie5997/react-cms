import React, { Component, useEffect } from 'react';
import './App.css';
import {  Link, Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { UseSelectType } from './store/actions';
// import getRouterConfigPage, { RouteConfigType } from './router/routes';
import { getRouterConfigPage, RouteConfigType } from './router/routes';
import Router from './router/Router';
import Login from './pages/login/login';
import system from './router/routes_list/routes_list';
import Role from './pages/role/role';


function App(props: RouteComponentProps) {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/"  render={ p => <Router {...p}></Router>}></Route>
        <Route path="/login" exact render={p => <Login {...p}/>}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default withRouter(App) ;
