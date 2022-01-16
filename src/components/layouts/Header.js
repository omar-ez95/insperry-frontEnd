import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import saveProduct from "../../static/img/saveProduct.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { BiSearchAlt } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

import {Context} from "../../contexts/UserContext"

library.add(faUser);

function Header() {
  const {setUser, isAuthenticated, setIsAuthenticated, setToken, token,user} = useContext(Context)


  const logout = ()  => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': null,
      },
    };
    var formData = new FormData();
    formData.append("Token", token); 
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      'Authorization':`Token ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization Access-Control-Allow-Origin'

    }
    config.headers['Authorization'] = `Token ${token}`;
    axios
      .post('http://18.192.205.152/api/auth/logout/', null, {crossDomain: true,headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization Access-Control-Allow-Origin'

      } },
           )
      .then((res) => {
        setIsAuthenticated(false)
        setToken('')
        setUser(null)
        localStorage.clear()
        delete axios.defaults.headers.common["Authorization"]; 
        // props.history.push("/");
      })
      .catch((err) => {

      });
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
      <li>
          <Link
            to={{
              pathname: `/profile/`,

            }}
          >
            <ImProfile
              className="header-icons"
            />
          </Link>
      </li>
      <li>
            <button className="header-button" onClick={logout}>
            <BiLogOut
              className="header-icons"
            />
            </button>
          
      </li>
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

  return <div className="cat-bottom">{isAuthenticated ? authLinks : guestLinks}</div>;
}

export default Header;
