import "./styles.css";
import Comment from "./components/Comment";
import { useState } from "react";
import useAction from "./hooks/use-Action";

let commentsData = {
  id: 1,
  items: []
};

const App = () => {
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");

  const { addNode,deleteNode } = useAction();

  const handleInsertNode = (id, comment) => {
    const newComments = addNode(comments, id, comment);
    setComments(newComments);
  };

  const handleDeleteNode = (id) => {
    const newComments = deleteNode(comments, id);
    setComments(newComments);
  };

  return (
    <div className="app">
      <div className="commentInput">
        <input
          type="text"
          placeholder="Enter comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={() => {
            handleInsertNode(1, newComment);
            setNewComment("");
          }}
        >
          Submit
        </button>
      </div>
      <Comment
        comments={comments}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default App;
