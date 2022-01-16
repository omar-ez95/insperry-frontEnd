import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

import {Context} from "../../contexts/UserContext"


function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()

  const {setUser, isAuthenticated, setIsAuthenticated, setToken} = useContext(Context)
  
  // if the user in logged in he will be redirected to the main page
  useEffect(() => {
    if(isAuthenticated){
      navigate("/");
     }
  }, [isAuthenticated])

  const logIn = () => {
    var formData = new FormData();
    formData.append("username", username); 
    formData.append("password", password); 
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios
      .post('http://18.192.205.152/api/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
    })
      .then((res) => {
        setIsAuthenticated(true)
        setToken(res.data.token)
        setUser(res.data.user)
        const userData = res.data
          localStorage.setItem('userData', JSON.stringify(userData))
        props.history.push("/");
      })
      .catch((err) => {

      });
  };

  LogIn.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    logIn();
    
  }

  const LogInForm = (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  
    

  return (
      LogInForm 
  )
}

export default LogIn;
