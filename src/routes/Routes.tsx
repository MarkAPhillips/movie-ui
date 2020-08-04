import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import {
  HomeContainer, LinkedMovie, Biography, SignIn, Register,
} from '../components';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeContainer />
    </Route>
    <Route exact strict path="/auth/login">
      <SignIn />
    </Route>
    <Route exact strict path="/auth/register">
      <Register />
    </Route>
    <Route exact strict path="/movie">
      <Redirect to="/" />
    </Route>
    <Route exact strict path="/movie/:id">
      <LinkedMovie />
    </Route>
    <Route exact strict path="/bio/:id">
      <Biography />
    </Route>
    <Redirect to="/" />
  </Switch>
);
