//https://www.freecodecamp.org/news/react-router-tutorial/
import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Vijit");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/employees"
              exact
            >
              Employees
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/employee-trs"
            >
              Employee-transactions
            </NavLink>
				
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/visitors"
            >
              Visitors
            </NavLink>
				
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/visitor-trs"
            >
              Visitor-transactions
            </NavLink>
				
				

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/logout"
            >
              Logout
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);