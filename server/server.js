require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("./db-connect");

const categoryRoutes = require("./routes/category");
const itemRoutes = require("./routes/item");
const homeRoutes = require("./routes/home");

const PORT = process.env.PORT;

const app = express();

//CORS
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/category", categoryRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/home", homeRoutes);

//listen request
app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
