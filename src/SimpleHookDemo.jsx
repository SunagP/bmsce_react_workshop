import { useState } from "react";
import "./App.css";

function SimpleHookDemo() {
  const [title, setTitle] = useState("Click the button!");

  const changeTitle = () => {
    setTitle("Title Changed! 🎉");
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        This demonstrates the simplest hook: <strong>useState</strong>
      </p>
      <button 
        className="card-btn"
        onClick={changeTitle}
      >
        Change Title
      </button>
      <p style={{ fontSize: "0.8em", marginTop: "15px", color: "#999" }}>
        💡 useState lets components remember values
      </p>
    </div>
  );
}

export default SimpleHookDemo;
