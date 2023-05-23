import { Component } from "react";
import { Alert, Container, Row, Col, Form, Button } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      formdata: {}
    }
  }

  handleChange = (event) => {
   
      this.setState({ formdata: { ...this.state.formdata, [event.target.name]: event.target.value } })
    
    }
    
//   change3 = () => {
//     console.log("inside")
//     this.switch2 === true ? this.switch2 = false : this.switch2 = true
//     console.log(this.switch2)
//   }
 
 


  
  handleSubmit =  (event) => {
    event.preventDefault();
    // const res = await axios.post("http://localhost:7834/saveStudent", formdata);
    // console.log(res);
    // if (res) {
    //   this.setState({
    //     isdata: true
    //   })
    console.log(this.state.formdata)
    

  }
  render() {
   
    return (
      <>
        <div style={{textAlign:"center"}}><h1>Registration</h1></div>
        <div id="formDiv" >
         
          <Row className="row g-0">
            <Col lg={9} className='border'>
              <Container className="ms-5">
                <Form onSubmit={this.handleSubmit}>
                  <Row className="row g-0 mt-3"><Col lg={3} className="mt-3"><h4>Name:</h4></Col>
                    <Col lg={4}><TextField label="Enter Fullname" name="name" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>

                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Department:</h4></Col>
                    <Col lg={4}>  <TextField label="Enter Department" name="Department" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>
                  </Row>
                 
                 
                  <Row className="row g-0">
                    <div style={{display:"flex",flexWrap:"wrap",marginTop:"10px"}}>
                    <div  className="mt-3" ><h4>Teacher:</h4></div>
                  
                     
                        <div><FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Name</InputLabel>
                          <Select
                            name="FacultyName"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="">

                            </MenuItem>
                            <MenuItem value="abc">abc</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3}>4</MenuItem>
                          </Select>
                        </FormControl></div>

                        <div><FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>Subject</InputLabel>
                          <Select
                            name="Subject"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="">

                            </MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                          </Select>
                        </FormControl></div></div>
                   
                    <Col lg={4}></Col>
                  </Row>
                  <Row className="row g-0"><Col lg={3} className="mt-3" ><h4>Enrollment ID:</h4></Col>
                    <Col lg={4}>   <TextField id="standard-basic" label="Enter Your Enrollment number" name="Rollnumber" fullWidth className="mb-3" variant="standard" onChange={this.handleChange} /></Col>
                    <Col lg={5}></Col>
                  </Row>
                
              
                 
                 
                </Form>
              </Container>
            </Col>
         
          </Row>
          <Button style={{ backgroundColor: "#0d6efd",padding:"10px", margin:"10px" }} type="submit" onClick={this.handleSubmit} >Student</Button>
        </div>
      </>
    )
  }
}


