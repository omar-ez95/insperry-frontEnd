import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

import {Context} from "../../contexts/UserContext"


function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const navigate = useNavigate()
  const {setUser, isAuthenticated, setIsAuthenticated, setToken} = useContext(Context)
  
  // if the user in logged in he will be redirected to the main page
  useEffect(() => {
    if(isAuthenticated){
      navigate("/");
     }
  }, [isAuthenticated,navigate])

  const registeration = ({ username, password, email }) => {
    var formData = new FormData();
    formData.append("username", username); 
    formData.append("password", password); 
    formData.append("email", email); 
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios
      .post('http://18.192.205.152/api/auth/register', formData, {
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

  Register.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      // props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      registeration(newUser);
    }
  };

  const regeisterForm = (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>userName</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
  
    

  return (
      regeisterForm 
  );
}

export default Register;
