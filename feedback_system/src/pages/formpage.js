import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      formdata: {},
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3001/registration", this.state.formdata);
    console.log(res);
    if (res) {
      this.setState({
        isdata: true
      })
    console.log(this.state.formdata);
  };
}

  handleChange = (event) => {
    this.setState({
      formdata: {
        ...this.state.formdata,
        [event.target.name]: event.target.value,
      },
    });
  };

  //   change3 = () => {
  //     console.log("inside")
  //     this.switch2 === true ? this.switch2 = false : this.switch2 = true
  //     console.log(this.switch2)
  //   }

  
  render(){
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Registration</h1>
        </div>
        <div id="formDiv">
          <Row className="row g-0">
            <Col lg={9} className="border">
              <Container className="ms-5">
                <Form onSubmit={this.handleSubmit}>
                  <Row className="row g-0 mt-3">
                    <Col lg={3} className="mt-3">
                      <h4>Name:</h4>
                    </Col>
                    <Col lg={4}>
                      <TextField
                        label="Enter Fullname"
                        name="name"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>
                  <Row className="row g-0">
                    <Col lg={3} className="mt-3">
                      <h4>Department:</h4>
                    </Col>
                    <Col lg={4}>
                      {" "}
                      <TextField
                        label="Enter Department"
                        name="Department"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>

                  <Row className="row g-0">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "10px",
                      }}
                    >
                      <div className="mt-3">
                        <h4>Teacher:</h4>
                      </div>

                      <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Name</InputLabel>
                          <Select
                            name="FacultyName"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="Nitin">Nitin</MenuItem>
                            <MenuItem value="cheitali">cheitali</MenuItem>
                            <MenuItem value="Tarjani">Tarjani</MenuItem>
                            <MenuItem value="Deepak">Deepak</MenuItem>
                            <MenuItem value="Preeti">Preeti</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Subject</InputLabel>
                          <Select name="Subject" onChange={this.handleChange}>
                          <MenuItem value="DBMS">DBMS</MenuItem>
                          <MenuItem value="Software Engineering">Software Engineering</MenuItem>
                          <MenuItem value="Data Structure">Data Structure</MenuItem>
                          <MenuItem value="AI/ML">AI/ML</MenuItem>
                          <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

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
                        name="Rollnumber"
                        fullWidth
                        className="mb-3"
                        variant="standard"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg={5}></Col>
                  </Row>
                </Form>
              </Container>
            </Col>
          </Row>
          <div className="submitform">
            <Button
              style={{ padding: "10px", backgroundColor: "lightBlue" }}
              type="submit"
              onClick={this.handleSubmit}
            >
              Student
            </Button>
          </div>
        </div>
      </>
    )
  }
}

