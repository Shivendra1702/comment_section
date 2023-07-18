// import React from 'react'
// import { useState } from "react";
import TempComRep from "../TempComRep/TempComRep";
import "./Comment.css";
import ReplyComponent from "../ReplyComponent/ReplyComponent";
// eslint-disable-next-line react/prop-types
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <TempComRep comment={comment} />

      <div className="reply">
        <h4>reply</h4>
        <ReplyComponent />
      </div>
    </div>
  );
};

export default Comment;
