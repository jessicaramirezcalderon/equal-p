import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import './style.scss';

//LOGIN COMPONENT

function Home() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const { email, loggedIn } = useContext(UserContext);
  return (
      <div className="nav-wrapper">
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
  );
}


export default Home;
