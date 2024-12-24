const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("hi from node API");
});

//deleta products

mongoose
  .connect(
    "mongodb+srv://namalekanayake412:LaWKQ9AoQxOjeXnk@backenddb.wulrt.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failes");
  });
