import { useState } from "react";
import "./ReplyComponent.css";
// eslint-disable-next-line react/prop-types

const ReplyComponent = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const handleAddComment = () => {
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };


  return (
    <div className="reply_body">
      <div className="reply_form">
        <input
          type="text"
          className="cmt_input"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button onClick={handleAddComment} className="comment_btn">
          reply
        </button>
      </div>

      <div className="comment_list reply_list">
        {comments.map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="nested_reply">
              <h3>{item}</h3>
              <ReplyComponent key={index} comment={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReplyComponent;
