
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
  const [name,setname] = useState([])
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer <your-token>",
  };

  useEffect(()=>{
    getdata();
  },[])
  const getdata =  ()=>{
    axios.get("http://localhost:3001/getdata")
    .then((res)=>{
      let d = res.data.data;
      d.map((e)=>{
        arry.push(e.t_name)
        
      })
      console.log(arry)
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
            <input type="text" placeholder="Teacher name" value={arry}/>
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
          <br />
          <div id="Question">
            <div>
              <label className="qlabel">
                Question 1: Abilit to bring conceptual clarity
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question1"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question1"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question1"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question1"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question1"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 2: Teacher subject knowledge
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question2"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question2"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question2"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question2"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question2"
                value="5"
                login_sing
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 3: Compliments theroy with practical examples
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question3"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question3"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question3"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question3"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question3"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 4: Motivation provided by teacher
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question4"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question4"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question4"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question4"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question4"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 5: Ablity to control the class
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question5"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question5"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question5"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question5"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question5"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 6: Completion & coverage of course
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question6"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question6"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question6"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question6"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question6"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 7: Teacher's Communication skill
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question7"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question7"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question7"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question7"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question7"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 8: Teacher's regularity & punctuality
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question8"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question8"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question8"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question8"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question8"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
            <br />
            <div>
              <label className="qlabel">
                Question 9: Interaction & guidance outside the classroom
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question9"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question9"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question9"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question9"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question9"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>{" "}
            <br />
            <div>
              <label className="qlabel">
                Question 10: Relevance of syllabus as per industry requirement
              </label>
              <br />
              Very Poor &emsp; 1
              <input
                type="radio"
                name="question10"
                value="1"
                onChange={handleInputChange}
              />
              &nbsp; 2
              <input
                type="radio"
                name="question10"
                value="2"
                onChange={handleInputChange}
              />
              &nbsp; 3
              <input
                type="radio"
                name="question10"
                value="3"
                onChange={handleInputChange}
              />
              &nbsp; 4
              <input
                type="radio"
                name="question10"
                value="4"
                onChange={handleInputChange}
              />
              &nbsp; 5
              <input
                type="radio"
                name="question10"
                value="5"
                onChange={handleInputChange}
              />
              &emsp; Excellent
              {/* </label> */}
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center"}}
          >
            <button type="submit" className="login_sing">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
