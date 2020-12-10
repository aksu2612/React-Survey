import React from 'react'; 
import { Link, withRouter } from "react-router-dom";
const NavigationBar = (props) => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ANA SAYFA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                 ANA SAYFA
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/components/Anket" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/components/Anket">
                 ANKET
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/components/Yarisma" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/components/Yarisma">
                 YARIŞMA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default withRouter( NavigationBar);