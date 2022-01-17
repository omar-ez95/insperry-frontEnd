import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePhoto(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://18.192.205.152/api/profile/${props.username}`,
        { crossDomain: true },
        { withCredentials: true }
      )
      .then((response) => {
        setUser(response.data);
      });
  }, [props.username]);

  return (
    <div className="comment-image-holder">
      <p className="black-color">{user.first_name}</p>
      <img src={"http://18.192.205.152/" + user.picture} alt="" />
    </div>
  );
}

export default ProfilePhoto;
