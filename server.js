require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// Create express server instance
const port = process.env.PORT || 3000;
const app = express();
// Add middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get routes
global.listingsAndReviews = require('./api/models/locationModel');
const routes = require("./api/routes/locationRoutes");

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Start server
routes(app);
app.listen(port);

// Error page
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
