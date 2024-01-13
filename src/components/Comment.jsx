/* eslint-disable no-unused-vars */

import { useState } from "react";
import expandUp from "../assets/expandUp.png";
import expandDown from "../assets/expandDown.png";

/* eslint-disable react/prop-types */
const Comment = ({ comments, handleInsertNode, handleDeleteNode }) => {
  const [expand, setExpand] = useState(true);
  const [replyMessage, setReplyMessage] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [like, setLike] = useState({
    likes: comments.like,
    isLike: false,
  });
  const [Dislike, setDisLike] = useState({
    Dislikes: comments.dislike,
    isDisLike: false,
  });
  return (
    <div className="comments">
      {comments.comment && (
        <div className="comment" onClick={() => setExpand(!expand)}>
          <img
            src={expand && comments.items.length > 0 ? expandUp : expandDown}
            alt=""
          />
          <span>{comments.comment}</span>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowReplyInput(!showReplyInput);
                setExpand(true);
              }}
            >
              Reply
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteNode(comments.id);
              }}
            >
              🗑️
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                Dislike.isDisLike
                  ? setDisLike({
                      Dislikes: Dislike.Dislikes - 1,
                      isDisLike: false,
                    })
                  : "";
                like.isLike
                  ? setLike({ likes: like.likes - 1, isLike: false })
                  : setLike({ likes: like.likes + 1, isLike: true });
              }}
            >
              👍🏿 {like.likes}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                like.isLike
                  ? setLike({ likes: like.likes - 1, isLike: false })
                  : "";
                Dislike.isDisLike
                  ? setDisLike({
                      Dislikes: Dislike.Dislikes - 1,
                      isDisLike: false,
                    })
                  : setDisLike({
                      Dislikes: Dislike.Dislikes + 1,
                      isDisLike: true,
                    });
              }}
            >
              👎🏿 {Dislike.Dislikes}
            </button>
          </div>
        </div>
      )}
      {showReplyInput && (
        <div className="replyInput">
          <input
            type="text"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            autoFocus
            onBlur={() => showReplyInput(!showReplyInput)}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleInsertNode(comments.id, replyMessage);
              setReplyMessage("");
              setShowReplyInput(!showReplyInput);
              setExpand(true);
            }}
          >
            add
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setReplyMessage("");
              setShowReplyInput(!showReplyInput);
            }}
          >
            cancel
          </button>
        </div>
      )}
      <div style={{ display: expand ? "block" : "none" }}>
        {comments.items.map((item) => {
          return (
            <Comment
              key={item.id}
              comments={item}
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
