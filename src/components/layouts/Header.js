import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import saveProduct from "../../static/img/saveProduct.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { BiSearchAlt } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
import { ImProfile } from "react-icons/im";

library.add(faUser);

function Header() {
  Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  const authLinks = (
    <ul className="footer-links">
      <li>
        <Link to="/">
          <SiHomebridge className="header-icons" />
        </Link>
      </li>
      <li>
        <Link to="/MyChoice">
          <img type="button" src={saveProduct} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/search">
          <BiSearchAlt className="header-icons" />
        </Link>
      </li>
      {/* <li>
        {user != null ? (
          <Link
            to={{
              pathname: `/profile/${user.id}`,
              state: { user: user },
            }}
          >
            <ImProfile
              className="header-icons"
            />
          </Link>
        ) : (
          <Link to="/login">
            <ImProfile
              className="header-icons"
            />
          </Link>
        )}
      </li> */}
      {/* <li>
        <button
          onClick={this.props.logout}
          className=" btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li> */}
    </ul>
  );

  const guestLinks = (
    <ul className="footer-links">
      <li>
        <Link to="/">
          <SiHomebridge className="header-icons red-color" />
        </Link>
      </li>
      <li>
        <Link to="/search">
          <BiSearchAlt className="header-icons red-color" />
        </Link>
      </li>
      <li>
        <Link to="/regestration" className="red-color">Register</Link>
      </li>
      <li>
        <Link to="/login" className="red-color">Login</Link>
      </li>
    </ul>
  );

  return <div className="cat-bottom">{guestLinks}</div>;
}

export default Header;
