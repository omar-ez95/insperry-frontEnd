import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import follow_n from '../../static/img/follow_n.png';
import follow_active from '../../static/img/follow_active.png';

import {Context} from "../../contexts/UserContext"

function Follow(props) {
    const [follow, setFollow]=useState([])
    const [restaurantId,setRestaurantId]=useState(0)
    const {isAuthenticated, token} = useContext(Context)

    const checkFollow = () => {
        const f = {
            option : 1,
            id : restaurantId
        }
        getFollow(f);
    };
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated === false) {
        navigate("/login");
      }
        setRestaurantId(props.restaurant)
        const f = {
            option : 0,
            id : restaurantId
        }
        if(restaurantId){
            getFollow(f)
        }
    },[isAuthenticated])

    // axios.get(`http://18.192.205.152:8000/app/api/follow/${f.id}/`,{option:f.option},{crossDomain: true,headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization':`Token ${token}`,
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    //         'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization Access-Control-Allow-Origin'
    
    //       } })

    function getFollow(f){
        axios.defaults.headers.common['Authorization'] = 'Token '+token;
        axios({
            method: 'get',
            url: `http://18.192.205.152/app/api/follow/${f.id}/${f.option}`,
            data: {
                'option':f.option
            },
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization Access-Control-Allow-Origin'
        
              } 

          }).then(res => {
            setFollow(res.data)
        }).catch(err => console.log(err));
    }

        return (       
            <div>
                { follow.follow === 'true' ? <img  type="button" className="buttons-color" onClick={checkFollow} src={follow_active} alt=""/> : <img  type="button" className="buttons-color" onClick={checkFollow} src={follow_n} alt=""/> }
            </div>
        )

}


export default Follow;