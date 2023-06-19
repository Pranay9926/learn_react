

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Main(props) {
  const nav = useNavigate();


  useEffect(() => {
  }, []);

  
  const sendLogin = () => {
    nav("/login");
  };

  const sendSignup = () => {
    nav("/Signin");
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Dialog open={true}>
          <DialogTitle>
            <Box>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                School of Computer Science and IT , DAVV
              </Typography>
            </Box>
          </DialogTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={require("../SCSIT.png")} />{" "}
          </div>

          <Box
            sx={{
              height: "500px",
              width: "550px",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            {" "}
            <br />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <br />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Welcome To SCSIT Feedback Generator
              </Typography>
            </Box>
            <br />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <br />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textAlign: "justify" }}
              >
                
                The aim of the project is to develop a Subject Feedback Generator that automates the process of generating personalized feedback for subjects.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              <Button variant="contained" sx={{ p: 1 }} onClick={sendSignup}>
                Sign Up
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" sx={{ p: 1 }} onClick={sendLogin}>
                Login
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}