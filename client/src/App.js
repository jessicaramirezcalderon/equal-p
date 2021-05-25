import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Nav from "./components/Nav";
// import HomeC from "./components/Home";
//Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Companies from "./pages/Companies";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";


function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedIn, setLoggedIn }}>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/companies/:companyid">
              <Companies />
            </Route>
            <Route exact path="/results">
              <Detail />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
