import React, { useEffect } from 'react';
import './App.css';
import {  Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Router from './router/Router';
import Login from './pages/login/login';


function App(props: RouteComponentProps) {
  useEffect(() => {
      props.history.push("/login")
  }, [props.history])
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact render={p => <Login {...p}/>}></Route>
        <Route path="/"  render={ p => <Router {...p}></Router>}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default withRouter(App) ;
