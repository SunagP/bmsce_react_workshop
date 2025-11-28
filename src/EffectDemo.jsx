import { useState, useEffect } from "react";
import "./App.css";

function EffectDemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#0d9488");

  // useEffect - runs after every render
  useEffect(() => {
    console.log("🎨 Effect ran! Count is:", count);
    
    // Change color based on count
    if (count < 5) {
      setColor("#0d9488"); // teal
    } else if (count < 10) {
      setColor("#f59e0b"); // orange
    } else {
      setColor("#ef4444"); // red
    }
  }, [count]); // Only runs when count changes

  return (
    <div className="card" style={{ borderLeft: `6px solid ${color}` }}>
      <h2>useEffect Demo</h2>
      <p style={{ color: color, fontWeight: "bold", fontSize: "1.2em" }}>
        Count: {count}
      </p>
      <p style={{ fontSize: "0.9em", color: "#666" }}>
        {count < 5 && "Keep going! 🟢"}
        {count >= 5 && count < 10 && "Getting high! 🟠"}
        {count >= 10 && "Wow! That's a lot! 🔴"}
      </p>
      <button 
        className="card-btn" 
        style={{ backgroundColor: color }}
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <p style={{ fontSize: "0.8em", marginTop: "10px", color: "#999" }}>
        💡 useEffect runs after each count change
      </p>
    </div>
  );
}

export default EffectDemo;
