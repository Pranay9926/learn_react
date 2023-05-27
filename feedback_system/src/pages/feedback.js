
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({});
  const [arry,setarry] = useState([]) 
  const navigate = useNavigate();

  useEffect(()=>{
    getdata();
  },[])
  const getdata =  ()=>{
    axios.get("http://localhost:3001/getdata")
    .then((res)=>{
      console.log(res.data.data);
      setarry(res.data.data);
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);
    alert("Your Feedback stored successfully ")
    setFeedback("")
    navigate("/");

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id="feedbackform">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Feedback Form
          </h1>
          <div>
            <span style={{ margin: "8px " }}> Roll No. : </span>
          </div>
          <br />
          <div>
            <span style={{ margin: "10px " }}> Faculty Name : </span>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel>Name</InputLabel>
                <Select name="Course">
                  <MenuItem value="MCA">MCA</MenuItem>
                  
                </Select>
              </FormControl>
            </div>
          </div>
          <br />
          <div>
            <span style={{ margin: "10px " }}> Subject : </span>
            <input
              style={{ margin: "0px 10px 2px 42px " }}
              type="text"
              placeholder="Enter Subject"
            />
          </div>
          {/* <h2 style={{ margin: "10px", textAlign: "center" }}>
            Faculty Feedback Form
          </h2> */}
          <br />
          <div id="Question">
            <div>
              <label>
                Question 1: Are you satisfied with the teaching staff and their
                teaching practices?
              </label>
              <br />
              <input
                type="radio"
                name="question1"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question1"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question1"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question1"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
              {/* </label> */}
            </div>
            <div>
              <br />
              <label>
                Question 2: Do you think faculty and support staff at the
                college were helpful?
              </label>
              <br />
              <input
                type="radio"
                name="question2"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question2"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question2"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question2"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>
            <div>
              <br />
              <label>
                Question 3: How easy was it to approach the instructor with
                questions or concerns?
              </label>
              <br />
              <input
                type="radio"
                name="question3"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question3"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question3"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question3"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>{" "}
            <div>
              <br />
              <label>
                Question 4: How clearly did your instructor explain the course
                material?
              </label>
              <br />
              <input
                type="radio"
                name="question4"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question4"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question4"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question4"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>{" "}
            <div>
              <br />
              <label>
                Question 5: How would you rate the instructor's mastery of the
                material?
              </label>
              <br />
              <input
                type="radio"
                name="question5"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question5"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question5"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question5"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>{" "}
            <div>
              <br />
              <label>
                Question 6: How satisfied are you with the facilities provided
                by the college?
              </label>
              <br />
              <input
                type="radio"
                name="question6"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question6"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question6"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question6"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>{" "}
            <div>
              <br />
              <label>
                Question 7: How supportive were the faculty members?
              </label>
              <br />
              <input
                type="radio"
                name="question7"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question7"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question7"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question7"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>{" "}
            <div>
              <br />
              <label>Question 8: Sincerity / Commitment of the teacher?</label>
              <br />
              <input
                type="radio"
                name="question8"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question8"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question8"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question8"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>
            <div>
              <br />
              <label>
                Question 9: How well was the teacher able to communicate?
              </label>
              <br />
              <input
                type="radio"
                name="question9"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question9"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question9"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question9"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>
            <div>
              <br />
              <label>
                Question 10: How far the teacher encourages student
                participation in class?
              </label>
              <br />
              <input
                type="radio"
                name="question10"
                value="good"
                onChange={handleInputChange}
              />
              Good
              <input
                type="radio"
                name="question10"
                value="bad"
                onChange={handleInputChange}
              />
              Bad
              <input
                type="radio"
                name="question10"
                value="very bad"
                onChange={handleInputChange}
              />
              Very Bad
              <input
                type="radio"
                name="question10"
                value="excellent"
                onChange={handleInputChange}
              />
              Excellent
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", margin: "5px" }}
          >
            <button type="submit" style={{ padding: "10px" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
