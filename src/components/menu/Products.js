import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductComponent from "./ProductComponent";
// import Toggler from "../../customHooks/Toggler"
// import {Context} from '../../contexts/UserContext'

function Products(props) {
  const [products, setProducts] = useState([]);
  // const [show, toggle] = Toggler()
  // const {user, isAuthenticated} = useContext(Context)

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`http://18.192.205.152/app/api/products/${props.id}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProducts();
  }, [props.id]);

  return (
    <div>
      {/* { t != false && user.user.id == props.user ? <ProductForm restaurant={props.restaurant} category={props.id} /> : null }                       */}
      {products.map((product) => (
        <div className="product-menu-card" key={product.id}>
          <ProductComponent product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
}

export default Products;
