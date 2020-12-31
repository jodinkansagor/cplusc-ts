import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Login, Signup } from "../components/auth";

const AuthLinks = () => (
  <div>
    <h1>Welcome to the AuthPage!</h1>
    <NavLink
      to="/auth/signup"
      activeStyle={{ background: "slategrey", color: "white" }}
    >
      I need to sign up
    </NavLink>
    <NavLink
      to="/auth/login"
      activeStyle={{ background: "slategrey", color: "white" }}
    >
      I need to login
    </NavLink>
  </div>
);

const AuthPage = () => {

  return (
    <Router>
      <Route path="/auth" component={AuthLinks} />
      <Switch>
      <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default AuthPage