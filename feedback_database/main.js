const express = require('express');
const bodyParser = require("body-parser");
var cors = require("cors");

const { Pool } = require('pg');

// Create a pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'feedback_pgdatabase',
  password: 'pranay',
  port: 5432, // Default PostgreSQL port
});
pool.connect();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

// API endpoint to receive login data
app.get("/getdata/:course/:sem", async (req, res) => {
  let course = req.params.course
  let sem = req.params.sem;
  console.log("inside api", sem);
  let v;
  try {
    // const { email, password } = req.body;
    pool.query(
      "SELECT DISTINCT t_name,t_subject,t_course FROM feedback_schema.teacher_table join feedback_schema.registration_table on feedback_schema.registration_table.s_course = feedback_schema.teacher_table.t_course WHERE t_course = $1 AND t_sem = $2 ",[course,sem],
      (err, respon) => {
        v = respon.rows;
        console.log(v);
        if (!err) {
          res.status(200).send({
            status: 200,
            success: true,
            data: v,
          });
          console.log("${res.rowCount}");
        } else {
          res.status(500).send({
            status: 500,
            success: false,
          });
          console.log("Error: ", err.message);
        }
      }
    );
  } catch {
    res.status(400).send({
      status: 400,
      success: false,
    });
  }
});


// Here we are creating API for Registration Form 

app.post("/registration", async (req, res) => {
  let rrr = req.body;
  console.log(rrr);
  try {
    const { Name, Enrollment, Email, Password, Course, Semester } = req.body;
    console.log(Name, Enrollment, Email, Password, Course, Semester);
      pool.query(
        "INSERT INTO feedback_schema.registration_table(student_name, enrollment, email, password, s_course, s_sem) VALUES ($1, $2, $3, $4, $5, $6)",
        [Name, Enrollment, Email, Password, Course, Semester],
        (err, respon) => {
          if (!err) console.log("your data is stored");
          else console.log("pranay ", err.message);
          // pool.end();
        }
      );
        res.status(200).send({
        status: 200,
        success: true,
      });
  } 
  catch {
    res.status(400).send({
      status: 400,
      success: false,
    });
  }
});

// Feedback API to store data in database

app.post("/feedback", async (req, res) => {
  let r = req.body.feedback;
  console.log("data form feedback =>",r);
  try {
    const {
      User_enrollment,
      Faculty,
      Subject,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
    } = req.body.feedback;
    console.log(
      User_enrollment,
      Faculty,
      Subject,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10
    );
    pool.query(
      "INSERT INTO feedback_schema.feedback_table(enrollment, t_name, t_subject, question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        User_enrollment,
        Faculty,
        Subject,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
      ],
      (err, respon) => {
        if (!err) console.log("your data is stored in feedback table");
        else console.log("pranay ", err.message);
        // pool.end();
      }
    );
    res.status(200).send({
      status: 200,
      success: true,
    });
  } catch {
    res.status(400).send({
      status: 400,
      success: false,
    });
  }
});




// Login data check


app.post  ("/login",  (req, res) => {
  console.log('***',req.body);

  try {
    const { email, password } = req.body;
    console.log(email, password);
     pool.query(
       `SELECT * FROM feedback_schema.registration_table WHERE email = $1 AND password = $2`,
       [email, password],
       (err, result) => {
        
         if (result.rowCount > 0) { console.log("this is result", result.rows);
           res.status(200).send({
             status: 200,
             success: true,
             userdata: result.rows
           });
         } else {
           res.status(500).send({
             status: 500,
             success: "false",
             msg:`Unable to find user with email - ${email}`
           });
         }
       }
     );
  } catch (e) {
    res.status(400).send({
      status: 400,
      success: false,
      error:e
    });
  }

});

app.listen(3001, () => {});
