import { useNavigate } from "react-router-dom";
import "./App.css";
function App() {
  var navigate = useNavigate();
  const handleChange = () => {
    navigate("/home");
  };
  return (
    <div className="banner">
      <div className="content">
        <h1>Welcome </h1>
        <button className="button" type="button" onClick={handleChange}>
          <span className="button"> Go to Students Page</span>
        </button>
      </div>
    </div>
  );
}

export default App;
