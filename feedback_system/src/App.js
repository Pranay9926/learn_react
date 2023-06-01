// import logo from "./logo.svg";
import "./App.css";
import { Login } from "./pages/loginpage";
import { Signin } from "./pages/signinpage";
import FeedbackForm from "./pages/feedback";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Protected } from "./pages/protected";
import Home from "./pages/homepage";
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
            Welcome to Feedback Generator
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/login">
              <Button sx={{ color: "#FFF" }}>Login</Button>
            </Link>
            <Link to="/Signin">
              <Button sx={{ color: "#FFF" }}>Sign Up</Button>
            </Link>
            <Link to="/">
              <Button sx={{ color: "#FFF" }} onClick={localStorage.clear()}>
                Logout
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/FeedbackForm"
          element={<Protected Component={FeedbackForm} />}
        />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;


