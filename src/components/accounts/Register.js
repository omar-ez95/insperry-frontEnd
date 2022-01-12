import { Link, Rediect } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const registeration = ({ username, password, email }) => {
    // Headers
    var formData = new FormData();
    formData.append("username", username); 
    formData.append("password", password); 
    formData.append("email", email); 
    console.log("resdatadddddddddddddd")
    const config = {

      // crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      //   'Access-Control-Allow-Credentials': 'true',

      //   'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
        
      //  'Access-Control-Allow-Origin': '*',
      },
    };
    // 'Access-Control-Allow-Headers': "Access-Control-Allow-Credentials,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Origin",
        
    const body = JSON.stringify({ username, email, password });
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios
      .post('http://18.192.205.152/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
    })
      .then((res) => {
        console.log(res.data,"resdata")
        const users = res.data
        // localStorage.setItem('jwt', users.auth_token)
        // localStorage.setItem('user', JSON.stringify(users))
        // const h = store.getState();
        // const t = h.auth.token;
        // axios.defaults.headers.common['Authorization'] = 'Token '+t;
      })
      .catch((err) => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        // dispatch({
        //   type: REGISTER_FAIL,
        // });
      });
  };

  Register.propTypes = {
    register: PropTypes.func.isRequired,
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

  return (
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
  );
}

export default Register;
