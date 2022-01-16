import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

import {Context} from "../../contexts/UserContext"
import FavoriteRestaurant from "./FavoriteRestaurant"

function MyChoice () {
    const [favoriteRestaurants, setFavoriteRestaurants]=useState([])
    const {isAuthenticated, token,user} = useContext(Context)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/login");
           }
    axios.defaults.headers.common['Authorization'] = 'Token '+token;
    axios.get(`http://18.192.205.152/api/favorite_restaurant`)
    .then(res => {

        setFavoriteRestaurants(res.data)
    }).catch(err => console.log(err));
    },[])

    return (
      <div>
        <h4 className="menu-überschrift">My Choice</h4>
        {/* {this.props.favoriteRestaurants.name} */}
        {favoriteRestaurants.map(
            favoriteRestaurant => (  
                <div key={favoriteRestaurant.id}>
                      <FavoriteRestaurant  key={favoriteRestaurant.id} favoriteRestaurant={favoriteRestaurant} />                   
                </div>
            ))}
        
      </div>
    );

}




export default MyChoice;


