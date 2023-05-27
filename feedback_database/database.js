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
app.get('/getdata', async (req, res) => {
  console.log('***');

  try {
    // const { email, password } = req.body;
    pool.query(
      "SELECT DISTINCT t_name,t_subject FROM feedback_schema.teacher_table join feedback_schema.registration_table on feedback_schema.registration_table.course = feedback_schema.teacher_table.course",
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
  }
  catch {
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
  // res.status(200).send("hello all");

  // res.status(200).send("hello   ")

  try {
    const { Name, Enrollment, Email, Password, Course, Semester } = req.body;
    console.log(Name, Enrollment, Email, Password, Course, Semester);
    pool.query(
      "INSERT INTO feedback_schema.registration_table(student_name, enrollment, email, password, course, sem) VALUES ($1, $2, $3, $4, $5, $6)",
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

      // msg:"Updated successfully !!
    });
  } catch {
    res.status(400).send({
      status: 400,
      success: false,
    });
  }
});


// Login data check


app.post("/login", async (req, res) => {
  let rrr = req.body;

  try {
    const { email, password } = req.body;
    console.log(email, password);
    pool.query(
      "SELECT email,password FROM feedback_schema.registration_table WHERE  email = '$1' AND password = '$2' ",
      [email, password],
      (err, respon) => {
        if (!err) {
          res.status(200).send({
            status: 200,
            success: true,
          });
          console.log(`${res}`);
          console.log(`${res.rowCount}`);
        } else {
          res.status(500).send({
            status: 500,
            success: false,
          });
          console.log("Error:- ", err.message);
        }
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

// 

// Start the server
app.listen(3001, () => {
});
