import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import ProfilePhoto from "../profile/ProfilePhoto";
import { Context } from "../../contexts/UserContext";
import RestaurantCommentsForm from "./RestaurantCommentsForm";

function RestaurantComments(props) {
  const [comments, setComments] = useState([]);

  const { isAuthenticated } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
    axios
      .get(
        `http://18.192.205.152/api/comments/${props.restaurantId}`,
        { crossDomain: true },
        { withCredentials: true }
      )
      .then((response) => {
        setComments(response.data);
      });
  }, );

  const commentsList = comments.map((comment) => (
    <div className="comment-box" key={comment.id}>
      <ProfilePhoto username={comment.user} />
      <div className="text-box">
        {comment.body}
        <p>- {formatTime(comment.date)}</p>
      </div>
      <ul></ul>
    </div>
  ));
  return (
    <div>
      <div className="card comments-modal">
        <div className="">{commentsList}</div>
      </div>
      <RestaurantCommentsForm
        restaurant={props.restaurantId}
        setComments={setComments}
      />
    </div>
  );
}

function formatTime(time, prefix = "") {
  const t = new Date(time).toLocaleDateString();
  return t;
}

export default RestaurantComments;
