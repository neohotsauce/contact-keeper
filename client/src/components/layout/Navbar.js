import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary mb-5">
      <h2>
        <i className={icon} />
        {title}
      </h2>
      <ul className="my-auto">
        <li className="mr-3">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-3">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-3">
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt mr-3"
};

export default Navbar;
