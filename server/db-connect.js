const mongoose = require("mongoose");
const uri = process.env.DBURI;
console.log(uri);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });
