// installed imports
import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import path from "path";
import { Server } from "socket.io";
import { createServer } from "http";

// custom module imports
import enc from "./public/js/enc.js";
import math from "./public/js/math.js";

// describe the port on which the server runs
var port = process.env.port || 3000;

// intialize express app object
var app = express();

// initialize collections ref
let projectCollection;

// get projects
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

// insert / create project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

// configuring the app-level middleware
// serving of static files through public folder
app.use(express.static(path.dirname(".") + "/public"));

// add capability to parse json requests > put parsed info to req.body
app.use(express.json());

// add capability to parse x-www-form-urlencoded requests > put parsed info to req.body
app.use(express.urlencoded({ extended: false }));

// simpler security protocols
app.use(cors());

// connection to mongodb
const uri = enc.dec(enc.sec);
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });

// creating collection object
const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MongoDb Connected Successfully");
    } else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  });
};

app.get("/api/projects", (req, res) => {
  getProjects((err, result) => {
    if (err) {
      res.json({
        statusCode: 400,
        message: err,
      });
    } else {
      res.json({
        statusCode: 200,
        message: "Success",
        data: result,
      });
    }
  });
});

app.post("/api/projects", (req, res) => {
  console.log("New project added", req.body);
  var newProject = req.body;
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({
        statusCode: 400,
        message: err,
      });
    } else {
      res.json({
        statusCode: 200,
        message: "project added successfully",
        data: result,
      });
    }
  });
});

// defining api endpoints
app.get("/add/:num1/:num2", function (req, res, next) {
  // typecasting received values
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = math.add(num1, num2) || null;
  if (result == null) {
    res
      .json({ result: result, statusCode: 400, message: "Failure" })
      .status(400);
  } else {
    res
      .json({ result: result, statusCode: 200, message: "Success" })
      .status(200);
  }
});

app.get("/sub/:num1/:num2", function (req, res, next) {
  // typecasting received values
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = math.sub(num1, num2) || null;
  if (result == null) {
    res
      .json({ result: result, statusCode: 400, message: "Failure" })
      .status(400);
  } else {
    res
      .json({ result: result, statusCode: 200, message: "Success" })
      .status(200);
  }
});

app.get("/mul/:num1/:num2", function (req, res, next) {
  // typecasting received values
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = math.mul(num1, num2) || null;
  if (result == null) {
    res
      .json({ result: result, statusCode: 400, message: "Failure" })
      .status(400);
  } else {
    res
      .json({ result: result, statusCode: 200, message: "Success" })
      .status(200);
  }
});

app.get("/div/:num1/:num2", function (req, res, next) {
  // typecasting received values
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = math.div(num1, num2) || null;
  if (result == null) {
    res
      .json({ result: result, statusCode: 400, message: "Failure" })
      .status(400);
  } else {
    res
      .json({ result: result, statusCode: 200, message: "Success" })
      .status(200);
  }
});

// adding socket code
let http = createServer(app);
let io = new Server(http);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("the user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 100);
});

// listen on designated port
http.listen(port, () => {
  console.log("App listening to: " + port);
  createCollection("Whales");
});
