import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeC from "./components/Home";
//Pages
import Home from "./pages/Home";
import MainForm from "./pages/MainForm";
import MainForm2 from "./pages/MainFormDUPLI";
import Companies from "./pages/Companies";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import Results from './pages/Results';


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
            <Route path="/company/:symbol" children={<MainForm2 />} />
            {/* <Route exact path="/yourinfo">
              <MainForm />
            </Route> */}
            <Route path="/results/:symbol" children={<Results />} />
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
