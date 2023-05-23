
import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({});

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
        <div
          className="Name"
          style={{
            border: "2px solid",
            width: "40%",
            margin: "auto",
            height: "auto",
          }}
        >
          <div>
            <span style={{ margin: "10px " }}> Roll No. : </span>
            <input
              style={{ margin: "10px 45px 2px 34px " }}
              type="number"
              placeholder="Enter your Roll Number"
            />
          </div>
          <br />
          <div>
            <span style={{ margin: "10px " }}> Faculty Name : </span>
            <input type="text" placeholder="Enter Faculty Name " />
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
          <h2>Faculty Feedback Form</h2>
          <div>
            <label>
              Question 1:
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
            </label>
          </div>
          <div>
            <label>
              Question 2:
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
            </label>
          </div>
          <div>
            <label>
              Question 3:
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
            </label>
          </div>{" "}
          <div>
            <label>
              Question 4:
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
            </label>
          </div>{" "}
          <div>
            <label>
              Question 5:
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
            </label>
          </div>{" "}
          <div>
            <label>
              Question 6:
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
            </label>
          </div>{" "}
          <div>
            <label>
              Question 7:
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
            </label>
          </div>{" "}
          <div>
            <label>
              Question 8:
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
            </label>
          </div>
          <div>
            <label>
              Question 9:
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
            </label>
          </div>
          <div>
            <label>
              Question 10:
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
            </label>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", margin: "5px" }}
          >
            <button type="submit" style={{padding:"10px"}}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
