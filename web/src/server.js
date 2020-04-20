//Require expressjs
const express = require("express");
const mongoose = require("mongoose");
var path = require('path');
const cors = require("cors");

//Destructure the credentials from the ENV variables
const {
  MONGO_URL,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD
}  = process.env;

//Initialize express server
const app = express();
app.use(cors());
app.use(express.json());

//Index page of the application
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

//Require the Users endpoints
const UsersRoute = require ('./api/Users');
//Middleware for /posts endpoints
app.use('/users', UsersRoute)

mongoose.connect(
  `mongodb://${MONGO_URL}/${MONGO_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
     user: MONGO_USERNAME,
     password: MONGO_PASSWORD
    }
   }
  )

  app.listen(3000, () => {
    console.log("running on port 3000");
    console.log("--------------------------");
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("we're connected to Mongo!");
  });

module.exports = app;
