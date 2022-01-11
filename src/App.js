import logo from './logo.svg';
import './App.css';
import React, { Fragment} from "react"
import { Routes ,Route, Switch  } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"

import axios from "axios";
import "./static/styles.scss"

import Main from "./pages/Main"
import Rescategory from "./pages/Rescategory"

function App() {
  return (
    <Router>    
        <Fragment>
            {/* <Rescategorys/> */}    
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/rescategory/:RescategoryName" element={<Rescategory/>} />
            </Routes>
        </Fragment>
    </Router>
     

  );
}

export default App;
