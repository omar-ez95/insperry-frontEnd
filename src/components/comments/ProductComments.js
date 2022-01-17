import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import {Context} from '../../contexts/UserContext'
import ProfilePhoto from "../profile/ProfilePhoto";
function ProductComments({id,restaurant}){
    const {user, isAuthenticated} = useContext(Context)
    const [comments,setComments]= useState([])
    const [owner]= useState(parseInt(user.id))
    const [body,setBody]= useState('')
    const [date]= useState(new Date())
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated === false) {
        navigate("/login");
      }
      const getProductComments = ()  => {
        axios.get(`http://18.192.205.152/api/product_comments/${id}`)
        .then(res => {

           setComments(res.data)
        }).catch(err => console.log(err));
      }
        getProductComments()
    },[id,isAuthenticated,navigate])

    const onSubmit = (e) => {
        e.preventDefault();
        const comment =  { date, owner,restaurant ,body, id};
        addProductComments(comment);
        setBody('')
      };

    //axios
    const addProductComments = (comment )=>  {

        var formData = new FormData();
          formData.append("body", comment.body); 
          formData.append("user", owner);
          formData.append("product", parseInt(id , 10 ));
          formData.append("restaurant",parseInt(restaurant , 10 ) );
          axios.defaults.xsrfCookieName = 'csrftoken'
          axios.defaults.xsrfHeaderName = 'X-CSRFToken'
          axios
            .post(`http://18.192.205.152/api/product_comments/${id}/`,formData).then((res) => {
             setComments(res.data)
          })
          .catch((err) => console.log(err));
      };
            
  
      

        const commentsList = comments.map((comment) => (
            <div className="comment-box" key={comment.id}>
              <ProfilePhoto username={comment.user} />
              <div className="text-box">
                {comment.body}
                <p className="black-color">- {formatTime(comment.date)}</p>
              </div>
              <ul></ul>
            </div>
          ));

    return(
        <div className='content' >
            <div className="scroll">
            {comments.length > 0 ?  commentsList : null}
        
        </div>
            <div className="card card-body  setMarginBottom">
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
            <button type="submit" className="btn btn-primary">
            Comment
            </button>
        </div>
        </form>
    </div>
        </div>
        )
}

function formatTime(time, prefix = "") {
    const t = new Date(time).toLocaleDateString();
    return t;
}

export default ProductComments