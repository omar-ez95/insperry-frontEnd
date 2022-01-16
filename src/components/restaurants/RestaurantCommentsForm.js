import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Context } from "../../contexts/UserContext";

import ProfilePhoto from "../profile/ProfilePhoto";

function RestaurantCommentsForm(props) {
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);
  const [restaurant, setRestaurant] = useState(0);
  const [date, setDate] = useState(new Date());

  const { user, isAuthenticated, token } = useContext(Context);

  useEffect(() => {
    setRestaurant(props.restaurant);
    setUserId(user.id);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user", userId);
    formData.append("restaurant", restaurant);
    formData.append("date", date);
    formData.append("body", body);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios
      .post(
        `http://18.192.205.152/api/comments/${restaurant}/`,formData,
        { crossDomain: true },
        { withCredentials: true }
      )
      .then((response) => {
        props.setComments( response.data);
      }).catch(err => console.log(err));
  };

  return (
    
      <div className="">
        
          <div className="card card-body mt-4 mb-4">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="text"
                  name="body"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn ">
                  Comment
                </button>
              </div>
            </form>
          </div>
        
      
    </div>
  );
}

export default RestaurantCommentsForm;
