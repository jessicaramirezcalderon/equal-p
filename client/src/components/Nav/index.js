import React from "react";
import './style.scss';

function Nav() {
  // const [loginExpanded, setLoginExpanded] = useState(false);
  // const { email, loggedIn } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="nav-wrapper">
        <h1><a className="navbar-brand text-light" href="/">Equal Pay App</a></h1>

      </div>
    </nav>
  );
}


export default Nav;
