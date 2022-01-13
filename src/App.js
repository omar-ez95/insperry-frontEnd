import React, { Fragment} from "react"
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"

import "./static/styles.scss"

import Main from "./pages/Main"
import Rescategory from "./pages/Rescategory"
import Restaurant from "./pages/Restaurant"
import Header from "./components/layouts/Header"
import Register from "./components/accounts/Register"
import LogIn from "./components/accounts/LogIn"

function App() {
  return (
    <Router>    
        <Fragment>
            {/* <Rescategorys/> */}    
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/rescategory/:RescategoryName" element={<Rescategory/>} />
                <Route exact path="/restaurant/:RestaurantId" element={<Restaurant/>} />
                <Route exact path="/regestration" element={<Register/>} />
                <Route exact path="/login" element={<LogIn/>} />
            </Routes>
            <Header/>
        </Fragment>
    </Router>
     

  );
}

export default App;
