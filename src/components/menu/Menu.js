import React, { useEffect, useContext, useState, lazy, Suspense  } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import loadable from '@loadable/component'

import { Link } from "react-router-dom";

import profilePhoto from '../../static/img/profile.png';


const renderLoader = () => <p>Loading</p>;
const Category = loadable(() => import('./Category'));

// import CategoryForm from "./CategoryForm"

function Menu (props) {
    const [categorys, setCategorys]=useState([])
    const { RestaurantId } = useParams();
    useEffect(()=>{
        getCategorys()
    },[])

    const getCategorys = () =>  {
        axios.get(`http://18.192.205.152/app/api/category/${RestaurantId}`)
        .then(res => {
            setCategorys(res.data)
        }).catch(err => console.log(err));
    }

    return (
      <div className="menu-padding">
        <h4 className="menu-überschrift">Klassisches Menü</h4>
        {/* {
        categorys.map(
            (category ,index) => (  
                <div>
                    {index == 0 && user != null && user.user.id == category.user ? <CategoryForm key={category.id} restaurant={match.params.id}/> : null }                      
                </div>
            ))
            } */}
        
        <h1 className="category-überschrift">Getränke:</h1>
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 2 ? <Category color='40b6d2' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        <h1 className="category-überschrift">Essen:</h1>
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 5 ?  <Category color='fbb72e' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 6 ? <Category color='fbb72e' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 7 ? <Category color='fbb72e' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 1 ? <Category color='fbb72e' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 3 ? <Category color='fbb72e' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 8 ? <Category color='cc5d82' key={category.id} category={category} /> : null }                      
                </div>
            ))}
        {categorys.map(
            category => (  
                <div key={category.id}>
                    {category.category_type == 4 ? <Category color='f27422' key={category.id} category={category} /> : null }                      
                </div>
            ))}
      </div>
    );
  
}




export default Menu;


