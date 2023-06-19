
import React, { useEffect, useState, useRef } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({});
  const [Subject, setSubject] = useState([]);
  const [Faculty, setFaculty] = useState([]);
  const [data_length , setlength] = useState(0)
  const navigate = useNavigate();
  
  
  const getIndexforFeedbackForm = () => {
    return localStorage.getItem("index")
      ? Number(localStorage.getItem("index"))
      : 0;
  };

  useEffect(() => {
    let database_Value = JSON.parse(localStorage.getItem("uservalue")) || null;
    let param = database_Value?.s_course;
    let param1 = database_Value?.s_sem;
    getdata(param, param1);
  }, [getIndexforFeedbackForm()]);

  const getUserValue = () => {
     let database_Value = JSON.parse(localStorage.getItem("uservalue")) || null;
      return database_Value;
  }


  const User_enrollment = getUserValue()?.enrollment;


  


  const getdata = async (param, param1) => {
    let result = await axios.get(
      `http://localhost:3001/getdata/${param}/${param1}`
    );
    
      if (result) {
        console.log("this is response", result);
        let indexes = getIndexforFeedbackForm();
        let d = result.data.data;
        if(d.length!=0){
          setlength(d.length);
          setFaculty(d[indexes]?.t_name);
          setSubject(d[indexes]?.t_subject);
          console.log(d[indexes]?.t_course);
          console.log(getUserValue()?.s_course);
        }
        else {
          alert("Teacher is not found for this course")
        }
    }
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
      Subject,
      Faculty,
      User_enrollment,
    }));
  };  

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(feedback);
    try {
      let res = await axios.post("http://localhost:3001/feedback", {feedback});
      if (res) {
        if(getIndexforFeedbackForm()<data_length-1){
          localStorage.setItem("index", getIndexforFeedbackForm() + 1);
          setFeedback({
            Subject,
            Faculty,
            User_enrollment
          });
        }
        else{
          alert("your Feedback Submitted Successfully !!!!");
          localStorage.clear();
          navigate("/");
        }
      } 
    } catch (e) {
        alert("falied"); 
    }
     const radioInputs = document.querySelectorAll('input[type="radio"]');
     radioInputs.forEach((input) => {
       input.checked = false;
     });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id="feedbackform">
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Feedback Form
          </h1>
          <div>
            <span style={{ margin: "8px " }}> Enrollment No. : </span>
            <input
              checked="true"
              type="text"
              placeholder="Enrollment"
              name="Enrollment"
              value={User_enrollment}
            />
          </div>
          <br />
          <div>
            <span style={{ margin: "10px " }}> Faculty Name : </span>
            <input
              type="text"
              placeholder="Teacher name"
              name="Faculty"
              value={Faculty}
            />
          </div>
          <br />
          <div>
            <span style={{ margin: "10px " }}> Subject : </span>
            <input
              style={{ margin: "0px 10px 2px 42px " }}
              type="text"
              placeholder="Enter Subject"
              name="Subject"
              value={Subject}
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
                Question 2:&emsp; Teacher subject knowledge
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

          <div style={{ display: "flex", justifyContent: "center" }}>
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
