import Card from "./Card";
import SimpleHookDemo from "./SimpleHookDemo";
import EffectDemo from "./EffectDemo";
import { Link } from "react-router-dom";
import "./App.css";

function CardPage() {
  return (
    <div className="dummy-container">
      <h2 className="title-text">React Hooks Demo</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", maxWidth: "1200px" }}>
        <Card 
          title="Card A 🎨" 
          description="This is card A with props!" 
        />
        <Card 
          title="Card B 🚀" 
          description="Same component, different data!" 
        />
        <Card 
          title="Card C 💡" 
          description="One component, reused 3 times!" 
        />
        <SimpleHookDemo />
        <EffectDemo />
      </div>
      <Link to="/">
        <button className="nav-btn">← Back to Home</button>
      </Link>
    </div>
  );
}

export default CardPage;
