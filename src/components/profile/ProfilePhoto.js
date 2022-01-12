import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePhoto({username}){
    const [user, setUser]= useState({})
    useEffect(() => {
        axios
          .get(
            `http://18.192.205.152//api/profile/${username}`,
            { crossDomain: true },
            { withCredentials: true }
          )
          .then((response) => {
            setUser(response.data);
          });
      }, []);


      return(
        <img src={user.picture}/>
      )

}

export default ProfilePhoto