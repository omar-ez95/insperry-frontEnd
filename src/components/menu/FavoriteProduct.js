import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import saveProductActive from "../../static/img/saveProductActive.png";
import saveProduct from "../../static/img/saveProduct.png";


import { Context } from "../../contexts/UserContext";

function FavoriteProduct(props) {
  const { isAuthenticated, token } = useContext(Context);

  const [favoriteProduct, setFavoriteProduct] = useState({
    check: null,
  });
  const getFavoriteProduct = (f) => {

    axios.defaults.headers.common["Authorization"] = "Token " + token;
    const data = f;
    axios
      .get(`http://18.192.205.152/api/favorite_product/${f.id}/${f.option}`, data)
      .then((res) => {
        setFavoriteProduct(res.data)
      })
      .catch((err) => console.log(err));
  };

  const checkFavoriteProduct = () => {
    const f = {
      option: 1,
      id: props.id,
    };
    getFavoriteProduct(f);
  };

  useEffect(() => {
    const f = {
      option: 0,
      id: props.id,
    };
    if (isAuthenticated) {
      getFavoriteProduct(f);
    }
  }, );
  // componentDidMount() {
  //     const h = store.getState();

  //     const t = h.auth.isAuthenticated;
  //     console.log('hhhhhhh',t)
  //     const f = {
  //         option : 0,
  //         id : this.props.id
  //     }
  //     if(t==true){
  //     this.getFavoriteProduct(f);

  //     }
  // }

  return (
    <div>
      {isAuthenticated ? (
        favoriteProduct.check === "true" ? (
          <img className="buttons-color"
            type="button"
            onClick={checkFavoriteProduct}
            src={saveProductActive}
            alt=""
          />
        ) : (
          <img className="buttons-color"
            type="button"
            onClick={checkFavoriteProduct}
            src={saveProduct}
            alt=""
          />
        )
      ) : (
        <Link to="/login">
          <img className="buttons-color" src={saveProduct} alt="" />
        </Link>
      )}
      {/* {this.state.favoriteProduct.check == 'true' ? <img   type="button" onClick={this.checkFavoriteProduct} src={saveProductActive} alt=""/> : 
                <img  type="button"   onClick={this.checkFavoriteProduct} src={saveProduct} alt=""/> } */}
    </div>
  );
}

export default FavoriteProduct;
