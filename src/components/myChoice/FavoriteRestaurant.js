import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

 import {Context} from "../../contexts/UserContext"
import ProductComponent from "../menu/ProductComponent";
import Toggler from "../../customHooks/Toggler";

function FavoriteRestaurant({ favoriteRestaurant }) {
  const [show, toggle] = Toggler();
  const[favoriteProducts,setFavoriteProducts]=useState([])
  const {token} = useContext(Context)


  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    axios
      .get(`http://18.192.205.152/api/favorite_products/${favoriteRestaurant.id}`)
      .then((res) => {
        console.log(res.data)
        setFavoriteProducts(res.data)
      })
      .catch((err) => console.log(err));
    return () => {
        setFavoriteProducts([])
    };
  }, );

  return (
    <div>
      <div onClick={toggle}>
        <div
          style={{ backgroundImage: `url(${favoriteRestaurant.profile_pic})` }}
          className="mychoise-element"
        >
          {/* <img src={this.props.favoriteRestaurant.profile_pic} /> */}
          <h1 className="black-color">{favoriteRestaurant.name}</h1>
        </div>
      </div>
      {show ? (
        <div className="container">
          {favoriteProducts.map((favoriteProduct) => (
            <div className="product-menu-card">
              <ProductComponent
                key={favoriteProduct.id}
                product={favoriteProduct}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FavoriteRestaurant;
