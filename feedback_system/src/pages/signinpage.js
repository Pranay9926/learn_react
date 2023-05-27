import { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     formdata: {},
  //   };
  // }
  const [formdata,setFormdata]=useState({})
const nav=useNavigate()
 const handleSubmit = (event) => {
    event.preventDefault();
    const res =axios.post("http://localhost:3001/registration", formdata);
    console.log(res);
    if (res) {
     console.log(res)
    };
    console.log(formdata);
     nav("/FeedbackForm");
    
  }

 const handleChange = (event) => {
setFormdata({
      
        ...formdata,
        [event.target.name]: event.target.value,
     
    });
  };

  //   change3 = () => {
  //     console.log("inside")
  //     this.switch2 === true ? this.switch2 = false : this.switch2 = true
  //     console.log(this.switch2)
  //   }

  
    return (
      <>
        {" "}
        <br />
        <div style={{ textAlign: "center" }}></div>
        <div id="formDiv">
          <h1 style={{ textAlign: "center" }}>Registration</h1>
          <Row className="row g-0">
            <Col lg={9} className="border">
              <Container className="ms-5">
                <Form onSubmit={handleSubmit}>
                  <Row className="row g-0 mt-3">
                    <Col lg={3} className="mt-3">
                      <h4>Name:</h4>
                    </Col>
                    <Col lg={4}>
                      <TextField
                        label="Enter Fullname"
                        name="Name"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>

                  <Row className="row g-0">
                    <Col lg={4}></Col>
                  </Row>
                  <Row className="row g-0">
                    <Col lg={3} className="mt-3">
                      <h4>Enrollment ID:</h4>
                    </Col>
                    <Col lg={4}>
                      {" "}
                      <TextField
                        id="standard-basic"
                        label="Enter Your Enrollment number"
                        name="Enrollment"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0">
                    <Col lg={3} className="mt-3">
                      <h4>Email ID:</h4>
                    </Col>
                    <Col lg={4}>
                      {" "}
                      <TextField
                        id="standard-basic"
                        label="Enter Your Email id"
                        name="Email"
                        type="email"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0">
                    <Col lg={3} className="mt-3">
                      <h4>Password :</h4>
                    </Col>
                    <Col lg={4}>
                      {" "}
                      <TextField
                        id="standard-basic"
                        label="Enter Your Password "
                        name="Password"
                        type="password"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>
                </Form>
              </Container>
            </Col>
          </Row>

          <Row className="row g-0">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <div className="mt-3">
                <h4>Course : </h4>
              </div>

              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel>Name</InputLabel>
                  <Select name="Course" onChange={handleChange}>
                    <MenuItem value="MCA">MCA</MenuItem>
                    <MenuItem value="BCA">BCA</MenuItem>
                    <MenuItem value="M.Sc.">M.Sc.</MenuItem>
                    <MenuItem value="MBA">MBA</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-3">
                <h4>Semester : </h4>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel>Semester</InputLabel>
                  <Select name="Semester" onChange={handleChange}>
                    <MenuItem value="1sem">1sem</MenuItem>
                    <MenuItem value="2sem">2sem</MenuItem>
                    <MenuItem value="3sem">3sem</MenuItem>
                    <MenuItem value="4sem">4sem</MenuItem>
                    <MenuItem value="5sem">5sem</MenuItem>
                    <MenuItem value="6sem">6sem</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Row>
          <div className="submitform">
            <Button
              style={{
                padding: "10px",
                backgroundColor: "rgb(171, 208, 243",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </>
    );
  
}

{
  /* 
  
</div>; */
}
