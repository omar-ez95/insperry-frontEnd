import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import menu from '../../static/img/menu.png';
import commentBtn from '../../static/img/commentBtn.png';
import follow_n from '../../static/img/follow_n.png';

import { Context } from "../../contexts/UserContext";
import InfoModal from "./InfoModal"
import RestaurnatComments from "./RestaurantComments"
import Toggler from "../../customHooks/Toggler"
import Follow from "./Follow"

function RestaurantDetails() {
  const [show, toggle] = Toggler()
  const { RestaurantId } = useParams();
  const {user, isAuthenticated, token} = useContext(Context)
  const [restaurant, setRestaurant] = useState({PLZ: "",
  address: "",
  bio: "",  
  date_created: "",
  dienstagauf: "",
  dienstagzu:"",
  donnerstagauf: "",
  donnerstagzu: "",
  email: "",
  freitagauf: "",
  freitagzu: "",
  gesehen: 0,
  info:  [],
  logo: "",
  mittwochauf: "",
  mittwochzu: "",
  montagauf: "",
  montagzu: "",
  name: "",
  phone: "",
  profile_pic: "",
  qr: "",
  recycel: true,
  recycel_text: "",
  regional: true,
  regional_text: "",
  rescategory: [ ],
  samsatagauf: "",
  samsatagzu: "",
  sonntagauf: "",
  sonntagzu: "",
  stadt: 0,
  user: 66,
  vegi: true,
  vegi_text: "",
  video: null,
  visibility: true,
  website: ""});

  useEffect(() => {
    axios
      .get(
        `http://18.192.205.152/app/api/restaurant/${RestaurantId}`,
        { crossDomain: true },
        { withCredentials: true }
      )
      .then((response) => {
        setRestaurant(response.data[0]);
        
      });
  }, []);

  const video = (
    <video
      controls
      autoPlay
      loop
      muted
      className="restaurant-video restaurant-video-margin"
    >
      <source src={restaurant.video} type="video/mp4" />
    </video>
  );
    const follow = (<li><Follow restaurant={restaurant.id}/></li>)
  return (
    <Row>
      <Col xs="12" s="12" lg="4" >
        
        <div className="restaurant-video" style={{backgroundImage : `url(${restaurant.profile_pic})`}}>
        <img
          src={restaurant.logo}
          className="restaurant-logo"
        /> 
          <h1 className="restaurant-name">{restaurant.name}</h1>
        </div>
        
      </Col>

      <Col xs="12" s="12" lg="8" className="restaurant-modal-padding">
        <div>
          <ul className="restaurant-buttons">
            <li><img className="buttons-color" onClick={toggle} src={commentBtn} alt=""/></li>
            <li><img className="buttons-color" src={menu} alt=""/></li>
            <li>{!isAuthenticated ? <Link to="/login" className="red-color">
                  <img className="buttons-color"  src={follow_n} alt=""/>
                  </Link> : restaurant.user ? <Follow restaurant={restaurant.user}/> : null
                 }</li>
          </ul>
        </div>
        {show ? <RestaurnatComments restaurantId={restaurant.id}/>  : null}
        <InfoModal restaurant={restaurant}/>
      </Col>
    </Row>
  );
}

RestaurantDetails.propTypes = {
  restaurant: PropTypes.object,
};
export default RestaurantDetails;
