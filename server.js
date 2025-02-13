const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
//const connectDB = require("./config/connectDB.js");
const mongoose = require("mongoose");
//! dotenv config
dotenv.config();
const app = express();
//!middlewares
app.use(express.json());
app.use(morgan("dev"));

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pujalahane2024:E8iaiZgVESaeoiu5@cluster0.ik7zs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongoDB connected successfully...");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

// const connectDB = async () => {

//   try {
//     // const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
//     const conn = await mongoose.connect(
//       "mongodb+srv://pujalahane2024:uXRflwkhAA58OYgC@cluster0.xiixj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log("mongodb connected successfully...");
//   } catch (error) {
//     console.log(error);
//   }
// };
// //! databasae connection
// connectDB();
//!routes
app.use("/api/v1/user", require("./routes/userRoutes.js"));

app.listen(5000, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`.bgCyan.white);
});
