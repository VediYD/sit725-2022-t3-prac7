// loading express
var express = require("express");

// describe the port on which the server runs
var port = process.env.port || 3000;

// intialize express app object
var app = express();

// configuring the app-level middleware

// serving of static files through public folder
app.use(express.static(__dirname + "/public"));

// add capability to parse json requests > put parsed info to req.body
app.use(express.json());

// add capability to parse x-www-form-urlencoded requests > put parsed info to req.body
app.use(express.urlencoded({ extended: false }));

// listen on designated port
app.listen(port, () => {
  console.log("App listening to: " + port);
});

// loading calculator functions
var calcFunc = require("./js/math");

// defining api endpoints
app.get("/add", (req, res) => {
  // typecasting received values
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  res.json({
    statusCode: 200,
    data: calcFunc.add(num1, num2),
    message: "Success",
  });
});

app.get("/sub", (req, res) => {
  // typecasting received values
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  res.json({
    statusCode: 200,
    data: calcFunc.sub(num1, num2),
    message: "Success",
  });
});

app.get("/mul", (req, res) => {
  // typecasting received values
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  res.json({
    statusCode: 200,
    data: calcFunc.mul(num1, num2),
    message: "Success",
  });
});

app.get("/div", (req, res) => {
  // typecasting received values
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  res.json({
    statusCode: 200,
    data: calcFunc.div(num1, num2),
    message: "Success",
  });
});
