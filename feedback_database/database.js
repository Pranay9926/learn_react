const express = require('express');
const bodyParser = require("body-parser");
var cors = require("cors");

const { Pool } = require('pg');

// Create a pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'feedback_pgdatabase',
  password: 'Pranay@2000',
  port: 5432, // Default PostgreSQL port
});
pool.connect();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
// 

// API endpoint to receive login data
app.post('/login', async (req, res) => {
  let rrr = req.body


  // res.status(200).send("hello   ")

  try {
    const { email, password } = req.body;
    console.log(email, password)
    pool.query(
      "INSERT INTO feedback_schema.users_table(email, password) VALUES ($1, $2)",
      [email, password],
      (err, respon) => {
        if (!err) console.log("${res.rowCount}");
        else console.log("pranay ", err.message);
        // pool.end();
      }
    );
    res.status(200).send({
      status: 200,
      success: true,
      
      // msg:"Updated successfully !!
    });
  }
  catch {
    res.status(400).send({
      status: 400,
      success: false,
      
    });
  }
});

// Start the server
app.listen(3001, () => {
});
