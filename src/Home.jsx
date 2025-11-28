import Counter from "./Counter";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="dummy-container">
      <div className="top-container">
        <h3 className="title-text">Well hello thereee</h3>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndmZnB0NWpub3JqcDgwdGkxbTF5bzZzNnZ2eHMzcmdqNjdqdXJ1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif"
          alt="well hello there gif"
          className="image-item"
        />
      </div>
      <Counter />
      <Counter />
      <Counter />
      <Link to="/card">
        <button className="nav-btn">Go to Card Page</button>
      </Link>
    </div>
  );
}

export default Home;
