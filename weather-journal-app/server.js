// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, () => {
  console.log(`server running on ${port}`);
});

// Return projectData object
app.get("/getData", getData);

function getData(req, res) {
  res.send(projectData);
}

app.post("/addData", addData);

function addData(req, res) {
  newData = {
    name: req.body.name,
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content,
  };

  projectData.push(newData);
  res.send(projectData);
  console.log(projectData);
}
