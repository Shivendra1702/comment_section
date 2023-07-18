// import { useState } from 'react'
import "./App.css";
import CommentSection from "./components/Comment_section/CommentSection";
function App() {
  return (
    <>
      <div className="app">
        <h1 className="header">My Website </h1>
        <div className="c_wrapper">
          <CommentSection />
        </div>
      </div>
    </>
  );
}

export default App;
