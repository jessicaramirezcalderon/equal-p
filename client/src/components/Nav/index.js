import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import './style.scss';

function Nav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const { email, loggedIn } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="nav-wrapper">
        <a className="navbar-brand" href="/">
          Equal Pay App
      </a>
        {(() => {
          if (loggedIn) {
            return <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={() => setLoginExpanded(false)}>Logout</Link> </p>;
          }
          else {
            if (!loginExpanded) {
              return <button type="button" className="btn btn-primary" onClick={() => setLoginExpanded(true)}>Login</button>;
            }
            else {
              return (
                <Fragment>
                  <LoginForm className="top-menu-login" />
                  <button onClick={() => setLoginExpanded(false)}>X</button>
                </Fragment>
              )
            }
          }
        })()}
      </div>
    </nav>
  );
}


export default Nav;
