import logo from './logo.svg';
import './App.css';
import React, { Fragment} from "react"
import { Routes ,Route, Switch  } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"

import axios from "axios";
import Main from "./pages/Main"
import "./static/styles.scss"

function App() {
  return (
    <Router>    
        <Fragment>
            {/* <Rescategorys/> */}    
            <Routes>
                <Route exact path="/" element={<Main/>} />
            </Routes>
        </Fragment>
    </Router>
     

  );
}

export default App;
