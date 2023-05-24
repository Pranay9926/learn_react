import logo from "./logo.svg";
import "./App.css";
import { Login } from "./pages/loginpage";
import { Forms } from "./pages/formpage";
import FeedbackForm from "./pages/feedback";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ marginLeft: "700px", marginTop: "20px" }}>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                padding: "10px",
                display: "inline",
                margin: "auto",
              }}
            >
              Welcome to Student Feedback System
            </h1>
          </div>
          <div>
            <ul class="nav-list">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Forms">Forms</Link>
              </li>
              <li>
                <Link to="/FeedbackForm">FeedbackForm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element=<Login /> />
        <Route path="/Forms" element=<Forms /> />
        <Route path="/FeedbackForm" element=<FeedbackForm /> />
      </Routes>
    </div>
  );
}

export default App;
