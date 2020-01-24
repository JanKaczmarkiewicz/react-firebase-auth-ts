import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Page404 from "../Routes/Page404";

export default () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route component={Page404} />
  </Switch>
);
