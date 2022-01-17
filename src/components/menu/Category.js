import React from "react";


import Toggler from "../../customHooks/Toggler"
import Products from "./Products";

function Category(props) {
    const [show, toggle] = Toggler()

    const bc = '#'+props.color 
  return (
    <div>
      <div onClick={toggle} className="header">
        <div style={{ backgroundColor: bc }} className="point"></div>
        {props.category.name}
      </div>
      {show ? (
        <div className="content">
          <Products
            id={props.category.id}
            restaurant={props.category.restaurant}
            user={props.category.user}
          />
        </div>
      ) : null}
    </div>
  );
}


export default Category
