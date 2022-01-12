import React, { useState, useEffect } from "react";
import axios from "axios";

import profile from "../../static/img/profile.png";

import ProfilePhoto from "../profile/ProfilePhoto"

function RestaurantCommentsForm(props){
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios
          .get(
            `http://18.192.205.152/api/comments/${props.restaurantId}`,
            { crossDomain: true },
            { withCredentials: true }
          )
          .then((response) => {
            setComments(response.data);
          });
      }, []);

      const commentsList= comments.map(
        comment => (   
            <div className="comment-box" key={comment.id}>
                <div className="comment-image-holder">                                   
                     <ProfilePhoto username={comment.user} /> 
                    {/* <img src={profile}></img> */}
                </div>
                <div className="text-box" >
                    <h1>{ comment.user }</h1>
                    { comment.body }
                    <p>- { formatTime(comment.date) }</p>
                </div>
                <ul>
                </ul>
            </div>
           ))
return(
    <div className="restaurant-modal comments-modal">
        <div className="">
            {commentsList}
        </div>
    </div>
)

}


export default RestaurantCommentsForm