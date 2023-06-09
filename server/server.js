require("dotenv").config();

const express = require("express");
require("./db-connect");

const categoryRoutes = require("./routes/category");
const itemRoutes = require("./routes/item");
const contactRoutes = require("./routes/contact");
const PORT = process.env.PORT;

const app = express();
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/category", categoryRoutes);
app.use("/api/item", itemRoutes);

//listen request
app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
