import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// components
import { HomeContainer, Movie, Biography } from "../components";
import { resetState } from "../apollo/client";

export const Routes = () => {
  const location = useLocation()
  useEffect(() => {
    resetState();
  }, [location]
  )
  return (
    <Switch>
      <Route exact path="/">
        <HomeContainer />
      </Route>
      <Route exact strict path="/movie" >
        <Redirect to='/' />
      </Route>
      <Route exact strict path="/movie/:id" >
        <Movie showCast />
      </Route>
      <Route exact strict path="/bio/:id" >
        <Biography />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

