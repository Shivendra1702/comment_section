import { useState } from "react";
import "./CommentSection.css";
import Comment from "../Comment/Comment";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const handleAddComment = () => {
    if (comment !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };
  return (
    <div className="cs_wrapper">
      <div className="cs_header">
        <h2>Comments</h2>
      </div>

      <div className="comment_form">
        <input
          type="text"
          className="comment_input"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button onClick={handleAddComment} className="comment_btn">
          Add Comment
        </button>
      </div>

      <div className="comment_list">
        {comments.map((item, index) => {
          return <Comment key={index} comment={item} />;
        })}
      </div>
    </div>
  );
};

export default CommentSection;
