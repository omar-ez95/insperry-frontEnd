import React from 'react';
import wifi from "../../static/img/wifi.png";
import plug from "../../static/img/plug.png";
import card from "../../static/img/card.png";

import coin from "../../static/img/coin.png";
import wpay from "../../static/img/wpay.png";
import visa from "../../static/img/visa.png";
import paypal from "../../static/img/paypal.png";
import amazonpay from "../../static/img/amazonpay.png";
import maestro from "../../static/img/maestro.png";
import babyCarriage from "../../static/img/babyCarriage.png";
import zeit from "../../static/img/zeit.png";
import Lampe from "../../static/img/Lampe.png";
import eco from "../../static/img/eco.png";
import regional from "../../static/img/regional.png";
import vegan from "../../static/img/vegan.png";


import { Row, Col } from "react-bootstrap";

function InfoModal({restaurant}){
    return(
        <div className="restaurant-modal">
          {/* <div>
            <img
              type="button"
              className="close-btn"
              
              src={cancel}
              alt=""
            />
          </div> */}
          <div >
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2>{restaurant.name}</h2>
                </div>

                {restaurant.info.map((info, index) => (
                  <div key={info+ index} className="carousel-item">
                    <h2>{info}</h2>
                  </div>
                ))}
              </div>
            </div>

            <div id="carouselExampleIndicators1" className="carousel slide">
              <div className="carousel-inner restaurant-info-modal">
                <div className="carousel-item active">
                  <p> Öffnungszeiten: </p>
                  <Row>
                    <Col>
                      <p>
                        {" "}
                        Mo: {restaurant.montagauf.substring(
                          0,
                          5
                        )} - {restaurant.montagzu.substring(0, 5)}
                      </p>
                      <p>
                        {" "}
                        Di: {restaurant.dienstagauf.substring(
                          0,
                          5
                        )} - {restaurant.dienstagzu.substring(0, 5)}
                      </p>
                      <p>
                        {" "}
                        Mi: {restaurant.mittwochauf.substring(
                          0,
                          5
                        )} - {restaurant.mittwochzu.substring(0, 5)}
                      </p>
                      <p>
                        {" "}
                        Do: {restaurant.donnerstagauf.substring(
                          0,
                          5
                        )} - {restaurant.donnerstagzu.substring(0, 5)}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Fr: {restaurant.freitagauf.substring(0, 5)} -{" "}
                        {restaurant.freitagzu.substring(0, 5)}
                      </p>
                      <p>
                        Sa: {restaurant.samsatagauf.substring(0, 5)} -{" "}
                        {restaurant.samsatagzu.substring(0, 5)}
                      </p>
                      <p>
                        So: {restaurant.sonntagauf.substring(0, 5)} -{" "}
                        {restaurant.sonntagzu.substring(0, 5)}
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="carousel-item">
                  <p>{restaurant.bio}</p>
                  <a href={`tel:${restaurant.phone}`}>
                    {restaurant.phone}
                  </a>
                  <p></p>
                </div>
                <div className="carousel-item">
                  <p>{restaurant.recycel_text}</p>
                </div>
                <div className="carousel-item">
                  <p>{restaurant.regional_text}</p>
                </div>
                <div className="carousel-item">
                  <p>{restaurant.vegi_text}</p>
                </div>
                <div className="carousel-item">
                  <p>
                    Loremipsum dolor sit amet consectetur, adipisicing elit.
                    Quod, laborum iste libero consectetur ad, velit facere
                    eligendi est sed inventore voluptatibus tenetur modi tempore
                    error ea unde ducimus. Ratione, iste!
                  </p>
                </div>
              </div>
            </div>

            <ol className="carousel-indicators1">
              <li data-target="#carouselExampleIndicators1" data-slide-to="0">
                <img src={zeit} className="restaurant-modal-info-btn" alt="" />
              </li>
              <li data-target="#carouselExampleIndicators1" data-slide-to="1">
                <img src={Lampe} className="restaurant-modal-info-btn" alt="" />
              </li>
              {restaurant.recycel === true ? (
                <li data-target="#carouselExampleIndicators1" data-slide-to="2">
                  <img className="restaurant-modal-info-btn" src={eco} alt="" />
                </li>
              ) : null}
              {restaurant.regional === true ? (
                <li data-target="#carouselExampleIndicators1" data-slide-to="3">
                  <img
                    className="restaurant-modal-info-btn"
                    src={regional}
                    alt=""
                  />
                </li>
              ) : null}
              {restaurant.vegi === true ? (
                <li data-target="#carouselExampleIndicators1" data-slide-to="4">
                  <img
                    className="restaurant-modal-info-btn"
                    src={vegan}
                    alt=""
                  />
                </li>
              ) : null}
            </ol>

            <ol className="carousel-indicators">
              {restaurant.info.map((info, index) => (
                <li key={index+"1"}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index + 1}
                >
                  {info === "Free WIFI" ? (
                    <img className="liWidth" src={wifi} alt="" />
                  ) : info === "STECKDOSEN" ? (
                    <img className="liWidth" src={plug} alt="" />
                  ) : info === "BABY FREUNDLICH" ? (
                    <img className="liWidth" src={babyCarriage} alt="" />
                  ) : info === "Table Games" ? (
                    <img className="liWidth" src={card} alt="" />
                  ) : info === "Coin" ? (
                    <img className="liWidth" src={coin} alt="" />
                  ) : info === "WPAY" ? (
                    <img className="liWidth" src={wpay} alt="" />
                  ) : info === "VISA" ? (
                    <img className="liWidth" src={visa} alt="" />
                  ) : info === "PAYPAL" ? (
                    <img className="liWidth" src={paypal} alt="" />
                  ) : info === "AMAZONPAY" ? (
                    <img className="liWidth" src={amazonpay} alt="" />
                  ) : info === "MAESTRO1" ? (
                    <img className="liWidth" src={maestro} alt="" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
}


export default InfoModal