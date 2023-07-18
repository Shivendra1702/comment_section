// import React from 'react'
import { useState } from "react";
import "./TempComRep.css";
// eslint-disable-next-line react/prop-types
const TempComRep = ({ comment }) => {
  const [score, setScore] = useState(0);

  const handleIncrement = () => {
    setScore(score + 1);
  };
  const handleDecrement = () => {
    setScore(score - 1);
  };

  // const handleReplyClick = () => {};

  return (
    <div className="tempcomrep">
      <div className="cs">
        <div className="cmt">
          <h3>{comment}</h3>
        </div>

        <span>{score}</span>

        <div>
          <button onClick={handleIncrement} className="like_btn c_btn">
            Like
          </button>
          <button onClick={handleDecrement} className="dislike_btn c_btn">
            Dislike
          </button>
          {/* <button onClick={handleReplyClick} className="reply_btn c_btn">
            Reply
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TempComRep;
