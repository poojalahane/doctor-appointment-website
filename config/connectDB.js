const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(
      "mongodb+srv://pujalahane2024:uXRflwkhAA58OYgC@cluster0.xiixj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongodb connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
