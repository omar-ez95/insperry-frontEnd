import React, { Fragment } from "react"
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"
import loadable from '@loadable/component'

import "./static/styles.scss"

const Main = loadable(() => import('./pages/Main'));
const Rescategory = loadable(() => import('./pages/Rescategory'));
const Restaurant = loadable(() => import('./pages/Restaurant'));
const Header = loadable(() => import('./components/layouts/Header'));
const Register = loadable(() => import('./components/accounts/Register'));
const LogIn = loadable(() => import('./components/accounts/LogIn'));
const Menu = loadable(() => import('./components/menu/Menu'));

// import Main from "./pages/Main"
// import Rescategory from "./pages/Rescategory"
// import Restaurant from "./pages/Restaurant"
// import Header from "./components/layouts/Header"
// import Register from "./components/accounts/Register"
// import LogIn from "./components/accounts/LogIn"
// import Menu from "./components/menu/Menu"

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
                <Route exact path="/restaurant/:RestaurantId/menu" element={<Menu/>} />
            </Routes>
            <Header/>
        </Fragment>
    </Router>
     

  );
}

export default App;
