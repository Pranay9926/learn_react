// import logo from "./logo.svg";
import "./App.css";
import { Login } from "./pages/loginpage";
import { Signin } from "./pages/signinpage";
import FeedbackForm from "./pages/feedback";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
function App() {
  return (
    <div className="App">
      <AppBar component="nav" color="info">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Welcome to Student Feedback System
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button sx={{ color: "#FFF" }}>Logout</Button>
            </Link>
            {/* <Link to="/FeedbackForm">
              <Button sx={{ color: "#FFF" }}>FeedbackForm</Button>
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;


