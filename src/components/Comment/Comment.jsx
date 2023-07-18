import { useState } from "react";
import "./Comment.css";

// eslint-disable-next-line react/prop-types
const Comment = ({ comment }) => {
  const [score, setScore] = useState(0);
  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const handleIncrement = () => {
    setScore(score + 1);
  };
  const handleDecrement = () => {
    setScore(score - 1);
  };
  const handleReplyClick = () => {
    setShowReply(!showReply);
  };
  const handleAddReply = () => {
    setReplyList([...replyList, reply]);
    setReply("");
  };

  return (
    <div className="comment">
      <div className="tempcomrep">
        <div className="cs">
          <div>
            <textarea defaultValue={comment} disabled name="comment" cols="50" rows="2">
            </textarea>
          </div>

          <span>{score}</span>

          <div>
            <button onClick={handleIncrement} className="like_btn c_btn">
              Like
            </button>
            <button onClick={handleDecrement} className="dislike_btn c_btn">
              Dislike
            </button>
            <button className="c_btn reply_btn" onClick={handleReplyClick}>
              Add Reply / Show Replies
            </button>
          </div>
        </div>
      </div>

      {showReply ? (
        <div className="reply">
          <div className="reply_form">
            <input
              type="text"
              className="comment_input"
              value={reply}
              onChange={(event) => {
                setReply(event.target.value);
              }}
            />
            <button onClick={handleAddReply} className="comment_btn">
              Add Reply
            </button>
          </div>
          <div className="comment_list">
            {replyList.map((item, index) => {
              return <Comment key={index} comment={item} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
